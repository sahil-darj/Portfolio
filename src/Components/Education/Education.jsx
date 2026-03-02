import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 w-full ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.5)]">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full p-1"
              />
            </div>

            {/* Side Container (Half Width) */}
            <div className={`w-full sm:w-1/2 flex ${index % 2 === 0 ? "sm:justify-start sm:pl-5" : "sm:justify-end sm:pr-5"}`}>
              {/* Content Section */}
              <div
                className="w-full sm:max-w-md p-4 sm:p-6 rounded-2xl border border-purple-500/30 bg-[#0d0b21]/80 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] transform transition-transform duration-300 hover:scale-[1.02] ml-8 sm:ml-0"
              >
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-4">
                  {/* School Logo/Image */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-purple-400 font-medium">
                      {edu.school}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{edu.date}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-purple-400 font-bold bg-purple-900/30 px-3 py-1 rounded-full text-[10px] sm:text-xs">
                    Grade: {edu.grade}
                  </span>
                </div>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </div>
            {/* Empty Spacer */}
            <div className="hidden sm:block sm:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
