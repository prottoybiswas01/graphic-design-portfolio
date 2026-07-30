export const initialData = {
  profile: {
    name: "Mohammad Tanvir",
    title: "Level 3 Certified Graphic Designer & UI Specialist",
    subtitle: "NSD/NSDA Level 3 Certified Freelancer specializing in Brand Identity, Social Media Creatives, Banner Planning, and Modern Web UI/UX.",
    heroBio: "I craft compelling visual experiences, sleek brand identities, and high-converting marketing designs. Certified in Graphic Design for Freelancing Level 3 under National Skill Development Assessment.",
    email: "tanvir.designer@example.com",
    phone: "+880 1700-000000",
    location: "Dhaka, Bangladesh",
    availability: "Available for Freelance & Remote Projects",
    avatar: "/profile.png",
    experienceYears: "3+",
    completedProjects: 54,
    clientSatisfaction: "100%",
    nsdaLevel: "Level 3 Certified (NSD)",
    socials: {
      behance: "https://behance.net",
      dribbble: "https://dribbble.net",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/8801700000000"
    }
  },
  skills: [
    { id: "s1", name: "Adobe Photoshop", category: "Software", level: 95, icon: "Image", color: "#31A8FF" },
    { id: "s2", name: "Adobe Illustrator", category: "Software", level: 92, icon: "PenTool", color: "#FF9A00" },
    { id: "s3", name: "Figma UI/UX", category: "Software", level: 90, icon: "Figma", color: "#F24E1E" },
    { id: "s4", name: "Brand Identity Design", category: "Core Skill", level: 94, icon: "Award", color: "#8B5CF6" },
    { id: "s5", name: "Social Media Banner & Creatives", category: "Core Skill", level: 96, icon: "Layout", color: "#06B6D4" },
    { id: "s6", name: "Typography & Color Theory", category: "Theory", level: 90, icon: "Type", color: "#F43F5E" },
    { id: "s7", name: "Vector Tracing & Illustration", category: "Core Skill", level: 88, icon: "Sparkles", color: "#10B981" },
    { id: "s8", name: "Print & Packaging Design", category: "Print", level: 85, icon: "Printer", color: "#F59E0B" }
  ],
  projects: [
    {
      id: "p1",
      title: "FinTech Mobile App UI/UX Design System",
      category: "UI/UX Design",
      description: "Complete dark-mode mobile banking app interface designed in Figma with comprehensive design tokens, icon sets, micro-interactions, and high-fidelity prototypes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "UI/UX", "Design System", "Mobile App"],
      client: "PayFlex Tech",
      date: "July 2026",
      link: "https://figma.com",
      featured: true
    },
    {
      id: "p2",
      title: "NexGen E-Commerce Brand Identity & Logo Kit",
      category: "Branding",
      description: "Full brand identity guidelines including primary/secondary logos, brand color system, typography pairs, business cards, and social media brand kits.",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
      tags: ["Adobe Illustrator", "Branding", "Logo Design", "Guidelines"],
      client: "NexGen Apparel",
      date: "June 2026",
      link: "https://behance.net",
      featured: true
    },
    {
      id: "p3",
      title: "High-Converting Promotional Banner Campaign",
      category: "Banners & Social",
      description: "A series of 15+ ad banners optimized for Facebook, Instagram, and Google Ads created for NSD Level 3 Freelancing Portfolio assessment.",
      image: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80",
      tags: ["Photoshop", "Ad Banners", "Social Media", "Marketing"],
      client: "Global Digital Agency",
      date: "May 2026",
      link: "https://dribbble.com",
      featured: true
    },
    {
      id: "p4",
      title: "Minimalist SaaS Dashboard Redesign",
      category: "UI/UX Design",
      description: "Web application dashboard layout focusing on data visualization, dark UI aesthetics, glassmorphism card widgets, and user workflow simplicity.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "SaaS Dashboard", "Web UI", "Responsive"],
      client: "CloudPulse Analytics",
      date: "April 2026",
      link: "https://figma.com",
      featured: false
    },
    {
      id: "p5",
      title: "Organic Coffee Roasters Package & Label Design",
      category: "Print & Marketing",
      description: "Custom eco-friendly pouch label design featuring hand-drawn vector elements, stamp textures, and print-ready spot UV die-cuts.",
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      tags: ["Packaging", "Print", "Illustrator", "Label Design"],
      client: "Artisan Coffee Co.",
      date: "March 2026",
      link: "https://behance.net",
      featured: false
    },
    {
      id: "p6",
      title: "Isometric Tech Vector Illustrations Kit",
      category: "Vector Art",
      description: "Custom 3D isometric vector illustration assets created for landing pages, infographics, and presentation decks.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["Vector Art", "Isometric", "Adobe Illustrator", "Graphics"],
      client: "TechMedia Studio",
      date: "February 2026",
      link: "https://dribbble.com",
      featured: false
    }
  ],
  services: [
    {
      id: "srv1",
      title: "Brand Identity & Logo Design",
      description: "Crafting memorable logos, color palettes, typography, and complete brand identity guidelines for startups and businesses.",
      icon: "Award",
      price: "From $150",
      deliverables: ["Vector Logo Files", "Brand Style Guide", "Social Assets", "Business Card Design"]
    },
    {
      id: "srv2",
      title: "Social Media & Ad Banner Design",
      description: "Creating high-converting social media posts, story designs, ad banners, and promotional campaign assets.",
      icon: "Layout",
      price: "From $80",
      deliverables: ["FB/IG Post Templates", "Ad Banners Set", "Editable PSD Source", "PNG/JPG High-Res"]
    },
    {
      id: "srv3",
      title: "Figma Web & Mobile UI/UX Design",
      description: "Modern, user-centric web and mobile app interfaces with interactive prototypes, wireframes, and design systems.",
      icon: "Figma",
      price: "From $250",
      deliverables: ["Figma Design File", "Interactive Prototype", "Design Tokens & Assets", "Mobile & Desktop Views"]
    },
    {
      id: "srv4",
      title: "Print Materials & Packaging",
      description: "Professional flyers, brochures, packaging labels, posters, and print-ready PDF files with die-cut lines.",
      icon: "Printer",
      price: "From $120",
      deliverables: ["Print Ready CMYK PDF", "Bleed & Die Lines", "3D Mockup Preview", "Vector Source File"]
    }
  ],
  experience: [
    {
      id: "e1",
      role: "Graphic Design Level 3 Certified Specialist",
      company: "National Skill Development Authority (NSDA / NSD)",
      period: "2026 - Present",
      description: "Successfully completed NSDA Level 3 Assessment in Graphic Design for Freelancing, demonstrating mastery in asset planning, vector illustration, photo retouching, banner design, and client project management."
    },
    {
      id: "e2",
      role: "Freelance Graphic Designer & UI Specialist",
      company: "Fiverr & Upwork Top Rated Freelancer",
      period: "2024 - Present",
      description: "Delivered 50+ successful design projects for global clients including brand kits, ad banners, SaaS UI designs, and marketing assets with 100% 5-star ratings."
    },
    {
      id: "e3",
      role: "Junior Visual Designer",
      company: "Creative Creative Agency",
      period: "2023 - 2024",
      description: "Designed marketing collateral, social media banners, vector logos, and website graphics while collaborating with senior art directors."
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Alex Rivera",
      role: "Founder, PayFlex Tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      comment: "Tanvir is an exceptional designer! His work on our app UI was clean, modern, and delivered ahead of schedule. Highly recommended for any serious branding or UI project.",
      rating: 5
    },
    {
      id: "t2",
      name: "Sarah Jenkins",
      role: "Marketing Director, NexGen",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      comment: "The social media banner kit and brand logo Tanvir designed boosted our click-through rate by 35%. Exceptional understanding of typography and color harmony!",
      rating: 5
    }
  ],
  messages: [
    {
      id: "m1",
      name: "Rahim Chowdhury",
      email: "rahim@agency.com",
      subject: "Branding Project Inquiry",
      service: "Brand Identity & Logo Design",
      message: "Hi Tanvir, I saw your Level 3 Graphic Design portfolio. We need a complete rebrand for our tech firm. Are you available this month?",
      date: "2026-07-30 14:30",
      read: false
    }
  ]
};
