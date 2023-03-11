import React from "react";
import "./Resume.css";

function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://docs.google.com/document/d/1uBZyH3Lezb_-eGEXYQYxUh1vlQyZbiuQiYP638QDFD8/edit?usp=sharing";
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <a
      className="link"
      href="https://docs.google.com/document/d/1uBZyH3Lezb_-eGEXYQYxUh1vlQyZbiuQiYP638QDFD8/edit?usp=sharing"
      target="_blank"
    >
      Currículum Vitae
    </a>
  );
}

export default DownloadCV;
