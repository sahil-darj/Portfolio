import React, { useState } from "react";
import { certificates } from "../../constants";

const CertificateSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  const handleToggleView = () => {
    // Toggle between showing 6 and all
    if (visibleCount === 6) {
      setVisibleCount(certificates.length); // show all
    } else {
      setVisibleCount(6); // collapse back to 6
    }
  };

  return (
    <section
      id="certificates"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Certificates</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my achievements, completed courses, and certifications.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.slice(0, visibleCount).map((certificate) => (
          <div
            key={certificate.id}
            onClick={() => handleOpenModal(certificate)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 flex justify-center">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-500 mb-4 text-sm">
                {certificate.description}
              </p>
              {certificate.tags && (
                <div className="mb-2">
                  {certificate.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {certificates.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleToggleView}
            className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 transition"
          >
            {visibleCount === 6 ? "View More" : "View Less"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-4xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {selectedCertificate.description}
                </p>
                {selectedCertificate.tags && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedCertificate.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
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
