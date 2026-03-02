import React, { useState, useEffect } from "react";
import { projects as staticProjects } from "../../constants";
import { FiX } from "react-icons/fi";

const Work = () => {
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost/portfolio/backend/api.php?action=projects");
        const data = await response.json();

        if (data && data.length > 0) {
          const transformed = data.map(p => ({
            id: p.id,
            title: p.title,
            description: p.description,
            image: p.image_path.startsWith('http') ? p.image_path : `http://localhost/portfolio/${p.image_path}`,
            tags: typeof p.tags === 'string' ? p.tags.split(',') : (p.tags || []),
            github: p.github_url,
            webapp: p.live_url
          }));
          setProjectList(transformed);
        } else {
          setProjectList(staticProjects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjectList(staticProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleToggleView = () => {
    if (visibleCount === 6) {
      setVisibleCount(projectList.length);
    } else {
      setVisibleCount(6);
    }
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase tracking-widest">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.slice(0, visibleCount).map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white/10 bg-[#110e2c]/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-[#8245ec]/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400'; }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-2 pt-2 text-sm line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {projectList.length > 6 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleToggleView}
            className="bg-[#8245ec] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#a855f7] hover:shadow-[0_0_20px_rgba(130,69,236,0.5)] transition-all active:scale-95"
          >
            {visibleCount === 6 ? "View More" : "View Less"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <div className="bg-[#110e2c] border border-white/10 rounded-[2.5rem] shadow-2xl lg:w-full w-full max-w-4xl overflow-hidden relative animate-fade-in">
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-[110]"
            >
              <FiX size={32} />
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-[#0d0b21] p-4 flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-2xl"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto max-h-[60vh] lg:max-h-none">
                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-8 text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags && Array.isArray(selectedProject.tags) && selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#8245ec]/10 text-[#8245ec] text-[10px] font-bold px-3 py-1 rounded-full border border-[#8245ec]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#1c1a3b] border border-white/5 hover:bg-white/5 text-white py-4 rounded-2xl font-bold text-center transition-all"
                    >
                      Github
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#8245ec] hover:bg-[#a855f7] text-white py-4 rounded-2xl font-bold text-center transition-all hover:shadow-[0_0_20px_rgba(130,69,236,0.3)]"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
