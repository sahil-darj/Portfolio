import React from "react";

const BlurBlob = ({ position, size }) => {
  const top = position?.top || "0%";
  const left = position?.left || "0%";
  const width = size?.width || "100%";
  const height = size?.height || "100%";

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
    </div>
  );
};

export default BlurBlob;
