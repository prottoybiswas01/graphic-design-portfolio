import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './db.js';
import { Profile, Project, Skill, Message } from './models.js';
import { initialData } from '../src/data/initialData.js';

const app = express();

app.use(cors());
app.use(express.json());

// Database connection middleware with graceful fallback
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    req.dbConnected = true;
  } catch (err) {
    req.dbConnected = false;
    console.warn('Backend running in local fallback mode (MongoDB IP whitelist or TLS restriction):', err.message);
  }
  next();
});

// Seed helper
async function seedDatabaseIfEmpty() {
  let profile = await Profile.findOne();
  if (!profile) {
    profile = await Profile.create(initialData.profile);
  }

  const projectCount = await Project.countDocuments();
  if (projectCount === 0) {
    await Project.insertMany(initialData.projects);
  }

  const skillCount = await Skill.countDocuments();
  if (skillCount === 0) {
    await Skill.insertMany(initialData.skills);
  }

  const messageCount = await Message.countDocuments();
  if (messageCount === 0) {
    await Message.insertMany(initialData.messages);
  }

  return profile;
}

// GET all portfolio data
app.get('/api/portfolio', async (req, res) => {
  try {
    if (req.dbConnected) {
      await seedDatabaseIfEmpty();
      const profile = await Profile.findOne();
      const projects = await Project.find().sort({ createdAt: -1 });
      const skills = await Skill.find().sort({ level: -1 });
      const messages = await Message.find().sort({ createdAt: -1 });

      return res.json({
        profile: profile || initialData.profile,
        projects: projects.map(p => ({ ...p.toObject(), id: p._id.toString() })),
        skills: skills.map(s => ({ ...s.toObject(), id: s._id.toString() })),
        messages: messages.map(m => ({ ...m.toObject(), id: m._id.toString() })),
        services: initialData.services,
        experience: initialData.experience,
        dbConnected: true
      });
    } else {
      return res.json({
        ...initialData,
        dbConnected: false,
        notice: 'MongoDB Atlas is connecting in fallback mode. Ensure 0.0.0.0/0 IP access is allowed in MongoDB Atlas Network Access.'
      });
    }
  } catch (err) {
    console.error('Error fetching portfolio data:', err);
    res.json({ ...initialData, dbConnected: false });
  }
});

// PUT Profile
app.put('/api/portfolio/profile', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create(req.body);
    } else {
      Object.assign(profile, req.body);
      await profile.save();
    }
    res.json({ success: true, profile });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update profile', details: err.message });
  }
});

// POST Project
app.post('/api/portfolio/projects', async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.json({ success: true, project: { ...newProject.toObject(), id: newProject._id.toString() } });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create project', details: err.message });
  }
});

// PUT Project
app.put('/api/portfolio/projects/:id', async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, project: { ...updated.toObject(), id: updated._id.toString() } });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update project', details: err.message });
  }
});

// DELETE Project
app.delete('/api/portfolio/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete project', details: err.message });
  }
});

// POST Skill
app.post('/api/portfolio/skills', async (req, res) => {
  try {
    const newSkill = await Skill.create(req.body);
    res.json({ success: true, skill: { ...newSkill.toObject(), id: newSkill._id.toString() } });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create skill', details: err.message });
  }
});

// DELETE Skill
app.delete('/api/portfolio/skills/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ success: true, id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete skill', details: err.message });
  }
});

// POST Contact Message
app.post('/api/portfolio/contact', async (req, res) => {
  try {
    const msgData = {
      ...req.body,
      date: new Date().toLocaleString(),
      read: false
    };
    const newMessage = await Message.create(msgData);
    res.json({ success: true, message: { ...newMessage.toObject(), id: newMessage._id.toString() } });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message', details: err.message });
  }
});

// DELETE Message
app.delete('/api/portfolio/messages/:id', async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ success: true, id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete message', details: err.message });
  }
});

// SEED Database Force
app.post('/api/portfolio/seed', async (req, res) => {
  try {
    await Profile.deleteMany({});
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Message.deleteMany({});

    await Profile.create(initialData.profile);
    await Project.insertMany(initialData.projects);
    await Skill.insertMany(initialData.skills);
    await Message.insertMany(initialData.messages);

    res.json({ success: true, message: 'Database successfully seeded with default Level 3 portfolio data!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to seed database', details: err.message });
  }
});

export default app;

// Standalone Server when running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Portfolio API Server listening on http://localhost:${PORT}`);
  });
}
