import React, { useState, useEffect } from "react";
import { certificates as staticCerts } from "../../constants";
import { FiX } from "react-icons/fi";

const CertificateSection = () => {
  const [certList, setCertList] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const response = await fetch("http://localhost/portfolio/backend/api.php?action=certificates");
        const data = await response.json();
        if (data && data.length > 0) {
          const transformed = data.map(c => ({
            id: c.id,
            title: c.title,
            description: c.description,
            image: c.image_path.startsWith('http') ? c.image_path : `http://localhost/portfolio/${c.image_path}`,
            tags: typeof c.tags === 'string' ? c.tags.split(',') : (c.tags || [])
          }));
          setCertList(transformed);
        } else {
          setCertList(staticCerts);
        }
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setCertList(staticCerts);
      }
    };
    fetchCerts();
  }, []);

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  const handleToggleView = () => {
    if (visibleCount === 6) {
      setVisibleCount(certList.length);
    } else {
      setVisibleCount(6);
    }
  };

  return (
    <section
      id="certificates"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase tracking-widest">Certificates</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my achievements, completed courses, and certifications.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certList.slice(0, visibleCount).map((certificate) => (
          <div
            key={certificate.id}
            onClick={() => handleOpenModal(certificate)}
            className="border border-white/10 bg-[#110e2c]/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-[#8245ec]/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-full h-64 overflow-hidden bg-[#0d0b21] flex justify-center items-center">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200'; }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-500 mb-2 text-xs line-clamp-2 leading-relaxed">
                {certificate.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {certList.length > 6 && (
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
      {selectedCertificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <div className="bg-[#110e2c] border border-white/10 rounded-[2.5rem] shadow-2xl w-full max-w-4xl overflow-hidden relative animate-fade-in">
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-[110]"
            >
              <FiX size={32} />
            </button>

            <div className="flex flex-col items-center">
              <div className="w-full flex justify-center bg-[#0d0b21] p-4">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-10 p-8 text-center w-full">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-400 mb-6 text-base leading-relaxed max-w-2xl mx-auto">
                  {selectedCertificate.description}
                </p>
                {selectedCertificate.tags && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedCertificate.tags && Array.isArray(selectedCertificate.tags) && selectedCertificate.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#8245ec]/10 text-[#8245ec] text-[10px] font-bold px-3 py-1 rounded-full border border-[#8245ec]/20 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateSection;
