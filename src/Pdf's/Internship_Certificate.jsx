import { useEffect } from "react";

export default function Internship_Certificate() {
  useEffect(() => {
    document.title = "Syed Anas – AI-ML Virtual Internship Certificate";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="/Certificates/SYED ANAS AWS AIML VIRTUAL INTERNSHIP.pdf"
        className="w-full h-full border-none"
        title="AI-ML Virtual Internship Certificate"
      ></iframe>
    </div>
  );
}
