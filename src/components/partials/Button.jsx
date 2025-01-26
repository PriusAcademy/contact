

import React from "react";
import { saveAs } from "file-saver";

function Button() {
  const handleDownload = () => {
    const pdfUrl = "/prius.pdf"; 
    const fileName = "pirus.pdf"; 
    saveAs(pdfUrl, fileName);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-[#04a7ee] text-white md:px-3  lg:px-6 py-3 px-10 rounded-sm md:ml-3 lg:ml-8 hover:bg-[#0c3a85] duration-150 flex items-center"
    >
      <img
        src="/images/download.png"
        alt="Download Icon"
        className="w-6 h-6 mr-2 md:w-4 md:h-4"
      />
      <span className="lg:text-lg md:text-sm font-semibold">Download Brochure</span>
    </button>
  );
}

export default Button;
