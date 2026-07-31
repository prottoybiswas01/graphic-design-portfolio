import mongoose from 'mongoose';

// Profile Schema
const ProfileSchema = new mongoose.Schema({
  name: { type: String, default: "Prottoy Kumar Biswas" },
  title: { type: String, default: "UI/UX Designer & Graphic Designer" },
  subtitle: { type: String, default: "UI/UX Designer & Graphic Designer specializing in Figma, Adobe XD, Photoshop, Illustrator & Premiere Pro" },
  heroBio: { type: String },
  email: { type: String, default: "prottoybiswas575358@gmail.com" },
  phone: { type: String, default: "01978167016" },
  location: { type: String, default: "Jhenaidah Sadar, Jhenaidah" },
  availability: { type: String, default: "Available for Freelance & Remote Graphic Design Projects" },
  avatar: { type: String, default: "/profile.png" },
  experienceYears: { type: String, default: "1+" },
  completedProjects: { type: Number, default: 25 },
  clientSatisfaction: { type: String, default: "100%" },
  nsdaLevel: { type: String, default: "Level 3 Certified (NSD)" },
  socials: {
    behance: { type: String },
    dribbble: { type: String },
    linkedin: { type: String },
    facebook: { type: String },
    whatsapp: { type: String }
  }
}, { timestamps: true });

// Project Schema
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  tags: [{ type: String }],
  client: { type: String },
  date: { type: String },
  link: { type: String },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

// Skill Schema
const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, default: 'UI/UX & Design' },
  level: { type: Number, default: 90 },
  icon: { type: String, default: 'Cpu' },
  color: { type: String, default: '#8B5CF6' }
}, { timestamps: true });

// Contact Message Schema
const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String },
  subject: { type: String },
  message: { type: String, required: true },
  date: { type: String },
  read: { type: Boolean, default: false }
}, { timestamps: true });

export const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);
export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
export const Skill = mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
export const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);
