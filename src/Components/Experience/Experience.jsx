import React, { useEffect, useState } from "react";
import { experiences as staticExperiences } from "../../constants";

const Experience = () => {
  const [expList, setExpList] = useState([]);

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const response = await fetch("http://localhost/portfolio/backend/api.php?action=experience");
        const data = await response.json();
        if (data && data.length > 0) {
          const transformed = data.map(e => ({
            id: e.id,
            img: e.logo_path.startsWith('http') ? e.logo_path : `http://localhost/portfolio/${e.logo_path}`,
            role: e.role,
            company: e.company,
            date: e.duration,
            desc: e.description,
            skills: Array.isArray(e.skills) ? e.skills : (typeof e.skills === 'string' ? e.skills.split(',') : [])
          }));
          setExpList(transformed);
        } else {
          setExpList(staticExperiences);
        }
      } catch (error) {
        console.error("Error fetching experience:", error);
        setExpList(staticExperiences);
      }
    };
    fetchExp();
  }, []);

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase tracking-widest">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white/10 h-full"></div>

        {expList.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 w-full ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
          >
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-[#0d0b21] border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.3)]">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full p-1"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }}
              />
            </div>

            <div className={`w-full sm:w-1/2 flex ${index % 2 === 0 ? "sm:justify-start sm:pl-5" : "sm:justify-end sm:pr-5"}`}>
              <div className="w-full sm:max-w-md p-6 rounded-3xl border border-white/10 bg-[#110e2c]/60 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#8245ec]/50 ml-8 sm:ml-0">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-white/5 bg-[#0d0b21]">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-[#8245ec] font-bold">
                      {experience.company}
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-bold">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-gray-400 text-sm leading-relaxed">{experience.desc}</p>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="bg-[#581C874D]/10 text-[#D8B4FE] px-3 py-1 text-[10px] rounded-full border border-[#8245ec]/20 font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
