import brainyBeeImage from './assets/images/briny_bee.jpg';

import abpNewsImage from './assets/images/abp_news.png';

import saasDashboardImage from './assets/images/saas_dashboard_main.png';

import designSystemImage from './assets/images/desig_system.png';

import aiSystemImage from './assets/images/regenerated_image_1779364157887.png';
import doctorAppointmentImage from './assets/images/doctor_appointment.png';

import fintechImage from './assets/images/kyc.png';

import checkoutImage from './assets/images/checkout.png';
export const USER_INFO = {
  name: "Avishkar Bhandare",
  role: "Lead UX, UI & Product Designer at KaGen",
  description: "Lead UX, UI & Product Designer with 9+ years of experience working on enterprise, fintech, SaaS, and digital products.",
};

export const PROJECTS = [
  {
    id: 'brainybee',
    title: 'BrainyBee: Streamlining educational management for modern institutions',
    description: 'Product Design, EdTech, Management Platform, Role-based Access, Performance Tracking',
    role: 'Product Designer',
    tags: ['Product Design', 'EdTech', 'Management Platform', 'Role-based Access', 'Performance Tracking'],
    color: '#fffbeb',
    image: brainyBeeImage,
    icon: 'education',
    type: 'case-study',
    content: {
      overview: "The BrainyBee System is a cutting-edge educational management platform designed to streamline operations for institutions with diverse programs and locations. Serving administrators, mentors, instructors, guardians, and students, PEAK simplifies student enrollment, performance tracking, and reporting. Its integration with Brightspace and Stride Skill Arcade ensures seamless navigation between academic content and learning functions.",
      industry: "Ed-Tech",
      timeline: [
        { week: "Week 1-2", activity: "Research", details: "UX Audit, Secondary Research, Requirement Gathering" },
        { week: "Week 3-4", activity: "Analysis", details: "Competitive Analysis, User Flow, Information Architecture" },
        { week: "Week 5-6", activity: "Design", details: "Sketch, Wireframes, Design System" },
        { week: "Week 7-8", activity: "Prototype", details: "User Interface, Prototype, Testing" },
        { week: "Week 9-10", activity: "Launch", details: "Review, Feedback, Final Handoff" }
      ],
      problems: [
        { title: "Complicated Interface", description: "Cluttered interface made it difficult to find and access different sections of the system.", solution: "Organize and simplify the navigation structure to ensure easy access to all critical sections." },
        { title: "Security Concerns", description: "Concerns about the security and privacy of user data during management.", solution: "Implement robust data protection protocols, including role-based access controls and encryption." },
        { title: "Navigation Challenges", description: "Challenges in navigating or using the platform due to poor UX design.", solution: "Design a responsive, user-friendly interface that is easy to navigate and provides helpful guidance." },
        { title: "Performance Issues", description: "Slow loading times when handling large volumes of data or performing critical operations.", solution: "Optimize backend processes and use real-time monitoring to ensure fast load times and smooth experience." }
      ],
      process: [
        { phase: "Discover", items: ["User Interviews", "UX Research", "Competitive Analysis"] },
        { phase: "Define", items: ["Personas", "Empathy Map", "Journey Map"] },
        { phase: "Ideate", items: ["User Flow", "Card Sorting", "Information Architecture"] },
        { phase: "Design", items: ["Wireframes", "Visual Design", "Design System"] },
        { phase: "Test", items: ["Usability Testing", "Implementing Feedback"] }
      ],
      persona: {
        name: "Paul Gilbert",
        role: "The System Administrator",
        age: 30,
        experience: "8+",
        location: "USA",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        bio: "Paul is an experienced system administrator. He is responsible for creating and maintaining accounts, licenses, and other critical entities that directly impact the financial operations of K12 and its customers. He has access to all functionalies within the system and can influence every user.",
        goals: [
          "Evaluate the ease of searching and filtering courses by type, schedule, and prerequisites.",
          "Assess the visibility of schedules, grades, and announcements on the dashboard.",
          "Check the clarity of error messages during registration and the ease of password setup and recovery."
        ],
        motivations: [
          "Delivering products that are well-received by users and drive business growth.",
          "Creating intuitive and seamless experiences for users.",
          "Fostering user engagement and creating platforms that encourage collaboration."
        ]
      },
      usabilityTesting: [
        "A student enrolls in courses for the upcoming semester.",
        "A student logs in and navigates through the dashboard.",
        "A new student registers an account and logs in for the first time.",
        "A student receives a system-generated notification.",
        "A user is logged out due to inactivity."
      ],
      ideate: {
        title: "Ideate",
        subtitle: "How Might We",
        description: "After looking into the problems I found that user's journey was difficult to complete and navigate. I came up with the best possible solution that will help users to solve their problems and easily manage their work.",
        hmw: [
          "How might we help students easily get information about their academic performance and progress?",
          "How might we simplify and organize the navigation structure to improve user engagement?",
          "How might we ensure data security and transparency while maintaining ease of use?",
          "How might we improve the speed of critical operations for large volumes of data?"
        ]
      },
      wireframes: {
        description: "I created low-fidelity and high-fidelity wireframes to visualize the core structure of the platform. These wireframes helped me communicate my design ideas with the project's stakeholders.",
        images: [
          "https://images.unsplash.com/photo-1581291518066-8e20e1974ef6?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1541462608141-ad60397d5873?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581291518115-9922a9446761?q=80&w=400&auto=format&fit=crop"
        ]
      },
      styleGuide: {
        colors: [
          { name: "Pearl White", hex: "#FFFFFF" },
          { name: "Soft Lilac", hex: "#F3E8FF" },
          { name: "Bright Purple", hex: "#9333EA" },
          { name: "Deep Navy", hex: "#1E1B4B" },
          { name: "Charcoal", hex: "#374151" }
        ],
        secondaryColors: [
          { name: "Info Blue", hex: "#3B82F6" },
          { name: "Success Green", hex: "#22C55E" },
          { name: "Warning Orange", hex: "#F59E0B" }
        ],
        typefaces: [
          { name: "Filson Pro", style: "Modern Bold", usage: "Display Headlines" },
          { name: "Moderat", style: "Clean Regular", usage: "Body Copy & Inputs" }
        ]
      },
      outcomes: "The project successfully streamlined the academic management process, reducing manual overhead by 40% and receiving positive feedback from 95% of the early-access users."
    }
  },
  {
    id: 'abp-news',
    title: 'ABP News: Delivering concise, real-time news updates for modern users',
    description: 'Product Design, Mobile App Design, AI-powered recommendations, Real-time tagging, News Aggregation',
    role: 'Product Designer',
    tags: ['Product Design', 'Mobile App Design', 'AI-powered recommendations', 'Real-time tagging', 'News Aggregation'],
    color: '#eff6ff',
    image: abpNewsImage,
    icon: 'news',
    type: 'case-study',
    content: {
      problem: 'Users felt overwhelmed by the volume of news and struggled to find relevant, real-time updates tailored to their interests.',
      process: 'Implemented AI-powered recommendations and real-time tagging to create a personalized news consumption experience.',
      outcomes: 'Increased daily active users and improved user engagement through personalized content delivery.'
    }
  },
  {
    id: 'saas-dashboard',
    title: 'Designing a Scalable SaaS Dashboard to Improve Decision-Making Efficiency',
    description: 'Product Design, SaaS, Enterprise Analytics, Dashboard Optimization, Data Visualization',
    role: 'Product Designer',
    tags: ['Product Design', 'SaaS', 'Enterprise Analytics', 'Dashboard Optimization', 'Data Visualization'],
    color: '#fff1f2',
    image: saasDashboardImage,
    icon: 'analytics',
    type: 'case-study',
    content: {
      problem: 'Enterprise users found it difficult to extract actionable insights from complex datasets using existing tools.',
      process: 'Optimized the dashboard layout and introduced advanced data visualization techniques for better clarity and speed.',
      outcomes: 'Enhanced decision-making speed by 50% and received high praise for the intuitive user experience.'
    }
  },
  {
    id: 'design-system',
    title: 'Building a Scalable Design System to Improve Consistency and Speed Across Product Teams',
    description: 'Lead Product Designer, System Owner',
    role: 'Lead Product Designer',
    tags: ['Lead Product Designer', 'System Owner'],
    color: '#f8fafc',
    image: designSystemImage,
    icon: 'design-system',
    type: 'case-study',
    content: {
      problem: 'Development and design teams were plagued by inconsistencies and slow delivery times due to the lack of a unified design system.',
      process: 'Led the creation of a comprehensive design system "Aurora" that unified components across all digital products.',
      outcomes: 'Drastically improved cross-team consistency and reduced time-to-market for new features.'
    }
  },
  {
    id: 'ai-system',
    title: 'Designing an AI System for Continuous Performance Intelligence & Fair Appraisals.',
    description: 'Lead Product Designer: Research, UX Strategy, AI Interaction, UI Design, System Thinking',
    role: 'Lead Product Designer',
    tags: ['Lead Product Designer: Research', 'UX Strategy', 'AI Interaction', 'UI Design', 'System Thinking'],
    color: '#fdf2f8',
    image: aiSystemImage,
    icon: 'ai',
    type: 'case-study',
    content: {
      problem: 'Employee appraisals were often seen as biased and lacked continuous feedback loops.',
      process: 'Designed an AI-driven system that provides real-time performance intelligence and ensures fair evaluation processes through data-backed insights.',
      outcomes: 'Increased employee satisfaction with the appraisal process and fostered a culture of continuous improvement.'
    }
  },
  {
    id: 'fintech-onboarding',
    title: 'Improving Fintech Onboarding Conversion by Simplifying KYC Flow',
    description: 'Product Designer, Mobile App, UX Strategy + UI Design',
    role: 'Product Designer',
    tags: ['Product Designer', 'Mobile App', 'UX Strategy + UI Design'],
    color: '#f5f3ff',
    image: fintechImage,
    icon: 'onboarding',
    type: 'case-study',
    content: {
      problem: 'The complex KYC process was leading to high drop-off rates during user onboarding for the fintech platform.',
      process: 'Simplified the onboarding flow and introduced intuitive UI elements to guide users through the identity verification process.',
      outcomes: 'Achieved a 35% increase in onboarding completion rates and positive user feedback on the ease of use.'
    }
  },
  {
    id: 'checkout-ux',
    title: 'Optimizing Checkout UX for Increased Conversions',
    description: 'Lead Product Designer | UX Strategy | Conversion Rate Optimization',
    role: 'Lead Product Designer',
    tags: ['Lead Product Designer', 'UX Strategy', 'Conversion Rate Optimization'],
    color: '#fffbeb',
    image: checkoutImage,
    icon: 'checkout',
    type: 'case-study',
    content: {
      problem: 'High cart abandonment rates were impacting the overall revenue of the e-commerce platform.',
      process: 'Conducted extensive UX research and implemented checkout optimizations focused on reducing friction and building trust.',
      outcomes: 'Boosted conversion rates by 20% and significantly reduced cart abandonment.'
    }
  },
  {
    id: 'doctor-appointment',
    title: 'AI Powered Doctor Appointment Booking App',
    description: 'This AI-powered doctor appointment booking app redefines how patients access healthcare. By simplifying the process to just a few steps — describe your problem, choose from expert recommendations, and confirm in minutes.',
    role: 'Product Designer',
    tags: ['Product Design', 'Healthcare', 'AI Integration', 'UX Strategy', 'Mobile App'],
    color: '#f0fdf4',
    image: doctorAppointmentImage,
    icon: 'healthcare',
    type: 'case-study',
    content: {
      overview: "An AI-powered healthcare solution designed to simplify the patient journey from symptom analysis to professional consultation. This app uses advanced machine learning to help users understand their health concerns and connect with the right specialists in minutes.",
      industry: "Healthcare / AI",
      timeline: [
        { week: "Week 1", activity: "Healthcare UX Research", details: "Market analysis, symptom checker audit" },
        { week: "Week 2", activity: "User Flows", details: "Patient booking journeys, doctor dashboard" },
        { week: "Week 3", activity: "AI Integration Strategy", details: "Defining symptom-to-specialist mapping" },
        { week: "Week 4", activity: "UI Design", details: "High-fidelity mockups, visual identity" }
      ],
      problems: [
        { title: "Vague Symptom Identification", description: "Users often don't know which specialist to book for their symptoms.", solution: "Integrated an AI symptom analyzer that suggests the correct department." },
        { title: "Long Booking Loops", description: "Traditional apps require too many steps to confirm an appointment.", solution: "Reduced the booking flow to just three core steps." },
        { title: "Trust & Transparency", description: "Patients are wary of AI diagnoses.", solution: "Positioned the AI as a 'recommendation engine' rather than a diagnostic tool." }
      ],
      process: [
        { phase: "Discover", items: ["Competitive Health App Audit", "User Interviews"] },
        { phase: "Ideate", items: ["Symptom Decision Trees", "Rapid Wireframing"] },
        { phase: "Design", items: ["Clean, Trustworthy UI", "Component Library"] },
        { phase: "Test", items: ["Usability testing with diverse age groups"] }
      ],
      outcomes: "Simplified the booking process to just a few steps, making healthcare more accessible and reducing booking errors by 40%."
    }
  }
];

export const EXPERIENCE = [
  {
    company: 'KaGen',
    role: 'Lead UI/UX Designer',
    duration: 'MAR 2025 - PRESENT',
    color: '#4f46e5'
  },
  {
    company: 'Successive Digital',
    role: 'Specialist UX Designer / Lead UX Designer',
    duration: 'MAY 2022 - MAR 2025',
    color: '#06b6d4'
  },
  {
    company: 'ETHOSH',
    role: 'UX Generalist',
    duration: 'OCT 2021 - MAY 2022',
    color: '#9333ea'
  },
  {
    company: 'Proctur Your Pocket Classroom',
    role: 'UI/UX Designer',
    duration: 'OCT 2020 - OCT 2021',
    color: '#d946ef'
  },
  {
    company: 'Visteon Corporation',
    role: 'Graphic Designer',
    duration: 'JUL 2019 - AUG 2020',
    color: '#6366f1'
  },
  {
    company: 'TSL Consulting Pvt. Ltd.',
    role: 'UI/UX & Graphic Designer',
    duration: 'MAR 2018 - JUL 2019',
    color: '#ec4899'
  },
  {
    company: 'CRIF High Mark Credit Information Services',
    role: 'Graphic Designer',
    duration: 'DEC 2017 - MAR 2018',
    color: '#f43f5e'
  }
];

export const SKILLS = {
  core: [
    { name: 'Product design', bgColor: 'bg-[#eff6ff]', borderColor: 'border-[#dbeafe]', textColor: 'text-[#2563eb]' },
    { name: 'User journey', bgColor: 'bg-[#eff6ff]', borderColor: 'border-[#dbeafe]', textColor: 'text-[#2563eb]' },
    { name: 'Process flows', bgColor: 'bg-[#f5f3ff]', borderColor: 'border-[#ede9fe]', textColor: 'text-[#7c3aed]' },
    { name: 'Prototyping', bgColor: 'bg-[#f5f3ff]', borderColor: 'border-[#ede9fe]', textColor: 'text-[#7c3aed]' },
    { name: 'Usability Testing', bgColor: 'bg-[#f5f3ff]', borderColor: 'border-[#ede9fe]', textColor: 'text-[#7c3aed]' },
    { name: 'SaaS', bgColor: 'bg-[#f0fdf4]', borderColor: 'border-[#dcfce7]', textColor: 'text-[#16a34a]' },
    { name: 'User research', bgColor: 'bg-[#fef2f2]', borderColor: 'border-[#fee2e2]', textColor: 'text-[#dc2626]' },
    { name: 'Interaction design', bgColor: 'bg-[#fffbeb]', borderColor: 'border-[#fef3c7]', textColor: 'text-[#d97706]' },
    { name: 'Heuristic Evaluation', bgColor: 'bg-[#ecfeff]', borderColor: 'border-[#cffafe]', textColor: 'text-[#0891b2]' },
    { name: 'User interface design', bgColor: 'bg-[#f0f9ff]', borderColor: 'border-[#e0f2fe]', textColor: 'text-[#0284c7]' },
    { name: 'Mobile application design', bgColor: 'bg-[#fff1f2]', borderColor: 'border-[#ffe4e6]', textColor: 'text-[#e11d48]' }
  ],
  tools: [
    { name: 'Figma', icon: '/assets/images/figma.png' },
    { name: 'Sketch', icon: 'https://cdn.worldvectorlogo.com/logos/sketch-2.svg' },
    { name: 'Adobe XD', icon: 'https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg' },
    { name: 'Jira', icon: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
    { name: 'Mural', icon: '/assets/images/mural.png' },
    { name: 'Confluence', icon: 'https://cdn.worldvectorlogo.com/logos/confluence-1.svg' },
    { name: 'Miro', icon: 'https://cdn.worldvectorlogo.com/logos/miro-2.svg' },
    { name: 'Illustrator', icon: '/assets/images/illustrator.png' },
    { name: 'MS Office', icon: '/assets/images/office.png' }
  ]
};

export const FOCUS_TAGS = [
  'Enterprise UX',
  'Strategic Thinking',
  'Problem Solver',
  'SaaS Specialist',
  'B2B Workflows',
  'System Architect',
  'Design Systems',
  'Data Viz',
  'User Research',
  'Human Centric'
];

