import React from "react";
import Skills from "./Components/Skills/Skills.jsx";
import Education from "./Components/Education/Education.jsx";
import Work from "./Components/Work/Work.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import BlurBlob from "./Components/BlurBlob.jsx";
import CertificateSection from "./Components/Certificate/Certificate.jsx";

import { RiGhost2Fill } from "react-icons/ri";

function App() {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ height: "40%", width: "30%" }}
      ></BlurBlob>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />

        <Work />
        <CertificateSection />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
