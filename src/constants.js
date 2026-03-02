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
import CC from "./assets/work_logo/cc.png";
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
    id: 3,
    img: mss,
    role: "Power BI Intern",
    company: "Microsoft & Edunet Foundation",
    date: "Feb 2026 - Mar 2026",
    desc: "Completed a virtual short-term internship focused on data visualization and business intelligence using Power BI. Learned to connect, transform, and model datasets, create interactive dashboards, and generate actionable insights.",
    skills: ["Power BI", "Data Visualization", "Data Modeling", "DAX", "Interactive Dashboards"],
  },
  {
    id: 2,
    img: vibrant,
    role: "Full Stack Developer Intern",
    company: "Vibrant India Tech",
    date: "Nov 2025 – Present",
    desc: "Working on real-world client production projects involving full-stack and AI-enabled web solutions. Responsible for developing responsive business and industrial websites, implementing backend logic, integrating APIs, and supporting deployment workflows.",
    skills: ["React.js", "JavaScript", "REST APIs", "Backend Development", "Deployment"],
  },
  {
    id: 1,
    img: ibm,
    role: "Front-End Development Intern",
    company: "IBM SkillsBuild & Edunet Foundation",
    date: "Aug 2025 – Oct 2025",
    desc: "Built responsive and reusable UI components using React.js and Tailwind CSS. Integrated frontend components with REST APIs and followed modern frontend development practices.",
    skills: ["React.js", "Tailwind CSS", "Frontend Development", "REST API Integration"],
  },
  {
    id: 0,
    img: ibm,
    role: "AI & Cloud Intern",
    company: "IBM SkillsBuild & Edunet Foundation",
    date: "July 2025 - Aug 2025",
    desc: "Completed a project-based internship in AI, Cloud Computing, and Machine Learning using IBM Cloud. Created AI agents, chatbots, and AutoAI models.",
    skills: ["Artificial Intelligence", "Machine Learning", "IBM Cloud", "Chatbots", "Python"],
  },
].sort((a, b) => b.id - a.id);

export const education = [
  {
    id: 0,
    img: lj,
    school: "LJ University",
    date: "2024 - 2027",
    grade: "7.81 SPI",
    desc: "Currently pursuing my 2nd year of BE at LJ University. I have studied courses such as Data Structures, Algorithms, DBMS, and Software Engineering.",
    degree: "Bachelor of Engineering - BE (Computer Engineering)",
  },
  {
    id: 1,
    img: gtu,
    school: "Gujarat Technological University",
    date: "2021 - 2024",
    grade: "9.12 CGPA",
    desc: "Completed my Diploma in Computer Engineering from Khyati School of Engineering (GTU).",
    degree: "Diploma - Computer Engineering",
  },
  {
    id: 2,
    img: ms,
    school: "Maharshi Sandipani School",
    date: "May 2021",
    grade: "83%",
    desc: "Completed class 10 education under the GSHEB board.",
    degree: "GSHEB(X)",
  },
].sort((a, b) => a.id - b.id); // For education, oldest to newest ID usually means ascending school levels, let's stick to newest first.
export const educationSorted = [...education].sort((a, b) => b.id - a.id);

export const projects = [
  {
    id: 15,
    title: "Blockchain Tech",
    description: "A blockchain-based project demonstrating secure transactions and transparent record-keeping.",
    image: BC,
    tags: ["React JS", "API", "Blockchain", "Security"],
    github: "",
    webapp: "",
  },
  {
    id: 14,
    title: "Customer Segmentation",
    description: "A machine learning project that clusters customers based on spending and behavior.",
    image: CutomerSeg,
    tags: ["Python", "Machine Learning", "K-means"],
    github: "",
    webapp: "",
  },
  {
    id: 13,
    title: "Expense Tracker",
    description: "A personal finance tracker built with MERN stack to log, categorize, and visualize expenses.",
    image: ET,
    tags: ["MERN Stack", "Dashboard", "Finance"],
    github: "",
    webapp: "",
  },
  {
    id: 12,
    title: "ReWear",
    description: "A web-based platform for sustainable fashion swaps.",
    image: Rewear,
    tags: ["TypeScript", "React JS", "Node.js"],
    github: "",
    webapp: "",
  },
  {
    id: 11,
    title: "Financial AI Assistant",
    description: "Intelligent RAG-powered chatbot built with IBM Cloud.",
    image: AI,
    tags: ["IBM Cloud", "Watsonx", "AI"],
    github: "",
    webapp: "",
  },
  {
    id: 10,
    title: "MediScope",
    description: "Django + React platform for disease prediction.",
    image: MS,
    tags: ["React JS", "Django", "Machine Learning"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Naroda Group",
    description: "Database-integrated business website for Naroda Group.",
    image: ng,
    tags: ["PHP", "MySQL", "Business"],
    github: "",
    webapp: "https://narodagroup.com/",
  },
  {
    id: 2,
    title: "Arrow Laser Machine",
    description: "Industrial product showcase platform.",
    image: alm,
    tags: ["React JS", "Industrial"],
    github: "",
    webapp: "https://arrowlasermachine.com/",
  }
].sort((a, b) => b.id - a.id);

export const certificates = [
  { id: 13, title: "Origami Workshop", description: "Art & Craft certification.", image: SB, tags: ["Art", "2020"] },
  { id: 4, title: "Full Stack Internship", description: "Production build experience.", image: vitinternship, tags: ["Full Stack", "2025"] },
  { id: 1, title: "IBM Machine Learning", description: "ML certification from IBM.", image: IBMML, tags: ["ML", "IBM"] }
].sort((a, b) => b.id - a.id);
