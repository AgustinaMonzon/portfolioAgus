import React from "react";
import "./Resume.css";

function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1ZxTc3_GSJXkWO5pHKUtTrS8a6wxv4-wL/view?usp=sharing";
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <a
      className="link"
      href="https://drive.google.com/file/d/1ZxTc3_GSJXkWO5pHKUtTrS8a6wxv4-wL/view?usp=sharing"
      target="_blank"
    >
      Currículum Vitae
    </a>
  );
}

export default DownloadCV;
