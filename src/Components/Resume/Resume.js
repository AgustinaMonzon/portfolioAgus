import React from "react";
import "./Resume.css";

function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://docs.google.com/document/d/1AVbY45VdX0__jzohl7-Nsg6UCU2SwGB5LlLAJTnpEYo/edit?tab=t.0";
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <a
      className="link"
      href="https://docs.google.com/document/d/1AVbY45VdX0__jzohl7-Nsg6UCU2SwGB5LlLAJTnpEYo/edit?tab=t.0"
      target="_blank"
    >
      Currículum Vitae
    </a>
  );
}

export default DownloadCV;
