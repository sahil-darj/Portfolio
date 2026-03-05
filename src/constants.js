// src/constants.js
// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import micro from "./assets/tech_logo/ms.png";
import ml from "./assets/tech_logo/ml.png";
import dj from "./assets/tech_logo/django.png";
import wp from "./assets/tech_logo/wordpress.png";
import php from "./assets/tech_logo/phpp.png";
import threejs from "./assets/tech_logo/3js.png";

// Experience Section Logo's
import ibm from "./assets/company_logo/ibm.png";
import vibrant from "./assets/company_logo/1736916708164.jpeg";
import mss from "./assets/work_logo/microsoft.png";

// Education Section Logo's
import lj from "./assets/education_logo/lj.jpg";
import gtu from "./assets/education_logo/gtu.jpg";
import ms from "./assets/education_logo/ms-edu.jpg";

// Project Section Logo's
import VIE from "./assets/work_logo/vie.png";
import Di from "./assets/project/dinesh.png";
import Machine from "./assets/project/machine.png";
import AI from "./assets/work_logo/ai-agent.png";
import CC from "./assets/work_logo/CC.png";
import Rewear from "./assets/work_logo/rewear.png";
import RE from "./assets/work_logo/renteeasy.png";
import CutomerSeg from "./assets/work_logo/cs.jpg";
import PCD from "./assets/work_logo/pcd.png";
import MS from "./assets/work_logo/mediscope.png";
import BC from "./assets/work_logo/blockchain.jpg";
import PP from "./assets/work_logo/pp.png";
import ET from "./assets/work_logo/et.png";
import ng from "./assets/work_logo/ng.png";
import ns from "./assets/work_logo/ns.png";
import alm from "./assets/work_logo/alm.png";
import ps from "./assets/work_logo/ps.png";
import felix from "./assets/work_logo/felix.png";

//Certificate
import vitinternship from "./assets/certificate/vit-internship.jpg";
import IBMML from "./assets/certificate/ibm-ml.jpg";
import IBM1 from "./assets/certificate/ibm-eda.jpg";
import JS from "./assets/certificate/ibm-web-basics.jpg";
import TCS from "./assets/certificate/tcs-career-edge.jpg";
import IBMSkill from "./assets/certificate/ibm-ai-start.jpg";
import IBMSkill2 from "./assets/certificate/ibm-cloud-journey.jpg";
import Axis from "./assets/certificate/axis-bank.jpg";
import Fullstack from "./assets/certificate/fullstack-intern.jpg";
import Webdev from "./assets/certificate/web-dev-intern.jpg";
import HP from "./assets/certificate/hp-ai.jpg";
import KSE from "./assets/certificate/kse.jpg";
import SB from "./assets/certificate/skyblue.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Sass", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Wordpress", logo: wp },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PHP", logo: php },
      { name: "Django", logo: dj },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "MS Office", logo: micro },
      { name: "Three JS", logo: threejs },
      { name: "Vercel", logo: vercelLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Machine Learning", logo: ml },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: vibrant,
    role: "Full Stack Developer Intern",
    company: "Vibrant India Tech",
    date: "Nov 2025 – Present",
    desc: "Working on real-world client production projects involving full-stack and AI-enabled web solutions. Responsible for developing responsive business and industrial websites, implementing backend logic, integrating APIs, and supporting deployment workflows.",
    skills: ["React.js", "JavaScript", "REST APIs", "Backend Development", "Deployment"],
  },
  {
    id: 1,
    img: mss,
    role: "Power BI Intern",
    company: "Microsoft & Edunet Foundation",
    date: "Feb 2026 - Mar 2026",
    desc: "Completed a virtual short-term internship focused on data visualization and business intelligence using Power BI. Learned to connect, transform, and model datasets, create interactive dashboards, and generate actionable insights.",
    skills: ["Power BI", "Data Visualization", "Data Modeling", "DAX", "Interactive Dashboards"],
  },
  {
    id: 2,
    img: ibm,
    role: "AI & Cloud Intern",
    company: "IBM SkillsBuild & Edunet Foundation",
    date: "July 2025 - Aug 2025",
    desc: "Completed a project-based internship in AI, Cloud Computing, and Machine Learning using IBM Cloud. Created AI agents, chatbots, and AutoAI models.",
    skills: ["Artificial Intelligence", "Machine Learning", "IBM Cloud", "Chatbots", "Python"],
  },
  {
    id: 3,
    img: ibm,
    role: "Front-End Development Intern",
    company: "IBM SkillsBuild & Edunet Foundation",
    date: "Aug 2025 – Oct 2025",
    desc: "Built responsive and reusable UI components using React.js and Tailwind CSS. Integrated frontend components with REST APIs and followed modern frontend development practices.",
    skills: ["React.js", "Tailwind CSS", "Frontend Development", "REST API Integration"],
  },
];

export const education = [
  {
    id: 0,
    img: lj,
    school: "LJ University",
    date: "2024 - 2027",
    grade: "7.81 SPI",
    desc: "Currently pursuing my 3rd year of Bachelor of Engineering in Computer Engineering at LJ University. Throughout my academic journey, I have gained strong foundations in Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, and Software Engineering. I actively apply these concepts in real-world projects to strengthen my practical knowledge and problem-solving skills.",
    degree: "Bachelor of Engineering - BE (Computer Engineering)",
  },
  {
    id: 1,
    img: gtu,
    school: "Gujarat Technological University",
    date: "2021 - 2024",
    grade: "9.12 CGPA",
    desc: "Completed my Diploma in Computer Engineering from Khyati School of Engineering under Gujarat Technological University (GTU). During this period, I developed a solid understanding of programming fundamentals, web development, database systems, and software design principles. I consistently maintained strong academic performance while working on technical projects.",
    degree: "Diploma - Computer Engineering",
  },
  {
    id: 2,
    img: ms,
    school: "Maharshi Sandipani School",
    date: "May 2021",
    grade: "83%",
    desc: "Completed my Secondary Education (Class 10) under the GSHEB board. Built strong fundamentals in Mathematics, Science, and logical reasoning which laid the foundation for my technical education in computer engineering.",
    degree: "GSHEB (X)",
  },
];


// All projects from database without sorting
export const projects = [
  {
    id: 1,
    title: "Naroda Group",
    description: "A database-integrated business website developed for Naroda Group to showcase services, projects, and company profile.",
    image: ng,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Responsive Design", "UI/UX Optimization", "Database Integration", "Production Deployment"],
    github: "",
    webapp: "https://narodagroup.com/",
  },

  {
    id: 4,
    title: "Arrow Laser Machine",
    description: "An industrial product showcase platform built using React.js for Arrow Laser Machine.",
    image: alm,
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design", "UI/UX Optimization", "Production Deployment"],
    github: "",
    webapp: "https://arrowlasermachine.com/",
  },
  {
    id: 5,
    title: "Natraj Steel",
    description: "A professional corporate website developed for Natraj Steel to highlight products, services, and client solutions.",
    image: ns,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design", "UI/UX Optimization", "Production Deployment"],
    github: "",
    webapp: "https://natrajsteel.com/",
  },
  {
    id: 2,
    title: "Felix N Sagar",
    description: "A professional service-based website developed for Felix N Sagar, a passport and visa consultancy firm. The platform provides detailed information about passport assistance, visa processing, and documentation support with a clean and user-friendly interface to simplify the application journey for clients.",
    image: felix,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Responsive Design", "Service Website", "UI/UX Optimization", "Form Validation", "Production Deployment"],
    github: "",
    webapp: "https://passprt-visa.vercel.app/",
  },
  {
    id: 3,
    title: "Palak Selection",
    description: "A modern fashion business website developed for Palak Selection, a ladies saree and ethnic wear brand. The platform showcases product collections with elegant UI design, mobile responsiveness, and a visually appealing layout to enhance customer engagement and brand presence.",
    image: ps,
    tags: ["HTML", "CSS", "JavaScript", "E-commerce UI", "Responsive Design", "Fashion Website", "UI/UX Optimization", "Production Deployment"],
    github: "",
    webapp: "https://palakselection.com/",
  },
  {
    id: 6,
    title: "PropertyPursuit",
    description: "A React + Node.js application that allows users to explore, filter, and compare properties.",
    image: PP,
    tags: ["React JS", "Node.js", "Django", "Express", "HTML", "CSS", "JavaScript", "Validation"],
    github: "",
    webapp: "",
  },
  {
    id: 7,
    title: "RentEasy",
    description: "A full-stack web app that simplifies property rentals by connecting tenants and landlords.",
    image: RE,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "MongoDB", "Express", "Nodejs", "Validation", "Payment Integration"],
    github: "",
    webapp: "",
  },
  {
    id: 8,
    title: "Vibrant India Expo",
    description: "A production-ready, responsive web platform developed for Vibrant India Expo to showcase exhibitors and industrial machinery.",
    image: VIE,
    tags: ["HTML", "Bootstrap", "Tailwind CSS", "JavaScript", "EmailJS", "Responsive Design", "UI/UX Optimization", "Production Deployment"],
    github: "",
    webapp: "https://vibrant-india-expo.vercel.app/",
  },
  {
    id: 9,
    title: "Dinesh Industries",
    description: "A professional industrial business website built for Dinesh Industries.",
    image: Di,
    tags: ["React JS", "Tailwind CSS", "HTML", "CSS", "Business Website", "Responsive UI"],
    github: "",
    webapp: "https://dinesh-industries-website.vercel.app/",
  },
  {
    id: 10,
    title: "Industrial Machinery Website",
    description: "A mobile-first industrial machinery showcase website.",
    image: Machine,
    tags: ["HTML", "Bootstrap", "JavaScript", "EmailJS", "Responsive Design", "Industrial UI", "Performance Optimization"],
    github: "",
    webapp: "https://machinerywebsite.vercel.app/",
  },
  {
    id: 11,
    title: "CampusConnect",
    description: "CampusConnect is a full-stack MERN application designed to centralize and streamline event discovery.",
    image: CC,
    tags: ["React JS", "Tailwind", "HTML", "CSS", "MongoDB", "MongoDB Atlas", "Express", "Nodejs"],
    github: "https://github.com/sahil-darj/Campus-Connect",
    webapp: "https://campusconnectbystackverse.netlify.app/",
  },
  {
    id: 12,
    title: "Premium Car Dealership",
    description: "A multi-page frontend for a luxury car dealership.",
    image: PCD,
    tags: ["HTML", "CSS", "PHP", "Tailwind", "Xampp", "Validation"],
    github: "https://github.com/sahil-darj/premium-car-dealership",
    webapp: "",
  },
  {
    id: 13,
    title: "MediScope",
    description: "A Django + React platform integrating disease prediction models and healthcare resources.",
    image: MS,
    tags: ["React JS", "API", "Machine Learning", "Django", "Authentication"],
    github: "https://github.com/sahil-darj/MediScope",
    webapp: "",
  },
  {
    id: 14,
    title: "Digital Financial Literacy Assistant",
    description: "An intelligent RAG-powered chatbot built with IBM Cloud to enhance financial literacy.",
    image: AI,
    tags: ["IBM Cloud", "Watsonx ai", "Watsonx Runtime", "Watsonx Assistant"],
    github: "https://github.com/sahil-darj/Digital-Finance-Assistant",
    webapp: "",
  },
  {
    id: 15,
    title: "ReWear",
    description: "ReWear is a web-based platform that enables users to exchange unused clothing.",
    image: Rewear,
    tags: ["TypeScript", "React JS", "Node.js", "Express", "HTML", "CSS"],
    github: "https://github.com/sahil-darj/Rewear",
    webapp: "",
  },
  {
    id: 16,
    title: "Expense Tracker",
    description: "A personal finance tracker built with MERN stack to log, categorize, and visualize expenses.",
    image: ET,
    tags: ["HTML", "CSS", "Bootstrap", "Django", "Search Feature"],
    github: "",
    webapp: "",
  },
  {
    id: 17,
    title: "Customer Segmentation",
    description: "A machine learning project that clusters customers based on spending and behavior.",
    image: CutomerSeg,
    tags: ["Python", "Machine Learning", "Kmean clustering"],
    github: "https://github.com/sahil-darj/Python_Project",
    webapp: "",
  },
  {
    id: 18,
    title: "Blockchain Tech",
    description: "A blockchain-based project demonstrating secure transactions and transparent record-keeping.",
    image: BC,
    tags: ["React JS", "API", "Machine Learning", "Django", "Authentication"],
    github: "",
    webapp: "",
  },
];

// All certificates from database without sorting
export const certificates = [
  {
    id: 1,
    title: "IBM Machine Learning",
    description: "Completed certification on Machine Learning from IBM.",
    image: IBMML,
    tags: ["Machine Learning", "IBM", "2025"],
  },
  {
    id: 2,
    title: "Exploratory Data Analysis for ML",
    description: "Hands-on data preprocessing and visualization for machine learning.",
    image: IBM1,
    tags: ["Machine Learning", "IBM", "2025"],
  },
  {
    id: 3,
    title: "Introduction to HTML, CSS & JavaScript",
    description: "Basics of front-end web development.",
    image: JS,
    tags: ["Web development", "IBM", "2025"],
  },
  {
    id: 4,
    title: "Full Stack Developer Internship",
    description: "Worked as a Full Stack Developer building production-ready web applications.",
    image: vitinternship,
    tags: ["Full Stack Development", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "UI/UX", "2025"],
  },
  {
    id: 5,
    title: "TCS iON Career Edge – Young Professional",
    description: "Soft skills, business communication & workplace readiness.",
    image: TCS,
    tags: ["Career Edge", "TCS", "2025"],
  },
  {
    id: 6,
    title: "Getting Started with Artificial Intelligence",
    description: "Focus on building a strong foundation by learning the fundamentals of computer science and mathematics.",
    image: IBMSkill,
    tags: ["Data Analysis", "IBM-Edunet", "2025"],
  },
  {
    id: 7,
    title: "Journey to Cloud Envisioning Your Solution",
    description: "On-premises infrastructure resources migrated to an external cloud provider.",
    image: IBMSkill2,
    tags: ["Cloud computing", "IBM-edunet", "2025"],
  },
  {
    id: 8,
    title: "AI for beginner",
    description: "HP certification in technology skills",
    image: HP,
    tags: ["AI", "HP", "2025"],
  },
  {
    id: 9,
    title: "Full Stack Development Intern",
    description: "Internship experience in full-stack web development.",
    image: Fullstack,
    tags: ["Full stack using Django", "Patelweb", "2023"],
  },
  {
    id: 10,
    title: "Web Development Intern",
    description: "Internship certification in front-end & back-end web development.",
    image: Webdev,
    tags: ["Web development", "Patelweb", "2022"],
  },
  {
    id: 11,
    title: "Axis Bank Competition",
    description: "Certification in digital banking and financial services.",
    image: Axis,
    tags: ["Art", "Axis bank", "2018"],
  },
  {
    id: 12,
    title: "Horizon Program",
    description: "Knowledge Skill Enhancement certification.",
    image: KSE,
    tags: ["Art", "KSE", "2021"],
  },
  {
    id: 13,
    title: "Origami workshop",
    description: "Art & Craft certification.",
    image: SB,
    tags: ["Art & Craft", "SkyBlue", "2020"],
  }

];
