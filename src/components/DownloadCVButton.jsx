import React from "react";

const DownloadCVButton = () => {
  return (
    <a
      href="/AbedCV.pdf"
      download="AbedAlNaassan_CV"
      className="fixed bottom-5 right-5 px-4 py-2 bg-[#915eff] text-white font-semibold rounded-lg shadow-lg hover:bg-[#915eff] transition-colors"
    >
      Download CV
    </a>
  );
};

export default DownloadCVButton;
