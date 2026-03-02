import React, { useEffect, useState } from "react";
import { education as staticEdu } from "../../constants";

const Education = () => {
  const [eduList, setEduList] = useState([]);

  useEffect(() => {
    const fetchEdu = async () => {
      try {
        const response = await fetch("http://localhost/portfolio/backend/api.php?action=education");
        const data = await response.json();
        if (data && data.length > 0) {
          const transformed = data.map(e => ({
            id: e.id,
            img: e.logo_path.startsWith('http') ? e.logo_path : `http://localhost/portfolio/${e.logo_path}`,
            school: e.school,
            degree: e.degree,
            date: e.duration,
            grade: e.grade,
            desc: e.description
          }));
          setEduList(transformed);
        } else {
          setEduList(staticEdu);
        }
      } catch (error) {
        console.error("Error fetching education:", error);
        setEduList(staticEdu);
      }
    };
    fetchEdu();
  }, []);

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase tracking-widest">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and educational background
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white/10 h-full"></div>

        {eduList.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 w-full ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
          >
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-[#0d0b21] border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center z-20 shadow-[0_0_20px_rgba(130,69,236,0.4)]">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full p-1"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }}
              />
            </div>

            <div className={`w-full sm:w-1/2 flex ${index % 2 === 0 ? "sm:justify-start sm:pl-5" : "sm:justify-end sm:pr-5"}`}>
              <div className="w-full sm:max-w-md p-6 rounded-3xl border border-white/10 bg-[#110e2c]/60 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#8245ec]/50 ml-8 sm:ml-0">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-white/5 bg-[#0d0b21]">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-[#8245ec] font-bold">
                      {edu.school}
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-bold">
                      {edu.date}
                    </p>
                  </div>
                </div>

                <div className="mt-4 inline-block bg-white/5 px-3 py-1 rounded-lg border border-white/10 text-xs text-gray-400">
                  Grade: <span className="text-white font-bold">{edu.grade}</span>
                </div>

                <p className="mt-5 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
