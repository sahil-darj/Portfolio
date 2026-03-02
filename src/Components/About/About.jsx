import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile pic.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-20">

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sahil Darji
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight min-h-[70px] md:min-h-[90px]">

            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "App Developer",
                2000,
                "Graphic Designer",
                2000,
                "Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="whitespace-nowrap"
              style={{ display: "inline-block" }}
              repeat={Infinity}
              cursor={true}
            />

          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over 1 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1KQHF_vq6eJqU48qCt1S39q6YJaTRHLk-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 10px #8245ec, 0 0 20px #8245ec",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px #8245ec, 0 0 40px #a855f7";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px #8245ec, 0 0 20px #8245ec";
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative group" >
          {/* Animated Glow Background behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] bg-[#8245ec]/20 rounded-full blur-[80px] group-hover:bg-[#8245ec]/30 transition-all duration-500"></div>

          <Tilt
            className="z-10"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.04}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <div className="relative p-1 rounded-full bg-gradient-to-r from-[#8245ec] via-[#a855f7] to-[#8245ec] shadow-[0_0_30px_rgba(130,69,236,0.3)] transition-all duration-500">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-[#0d0b21]">
                <img
                  src={profileImage}
                  alt="Sahil Darji"
                  className="w-full h-full rounded-full object-cover object-[50%_15%] transition-transform duration-700 hover:scale-110"
                />

              </div>
            </div>

          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
