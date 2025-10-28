"use client";

import Button from "@/components/Button";

import { downloadLocalFile } from "@/helpers/downloadLocalFile";

function CVButton() {
  const handleDownloadCV = () => {
    downloadLocalFile("/CV_Middle_Frontend_Developer.pdf");
  };

  return (
    <Button
      variant="outlined"
      onClick={handleDownloadCV}
      className="backdrop-blur-md"
    >
      Download CV
    </Button>
  );
}

export default CVButton;
