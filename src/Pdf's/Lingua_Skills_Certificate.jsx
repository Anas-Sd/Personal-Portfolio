import { useEffect } from "react";

export default function Lingua_Skills_Certificate() {
  useEffect(() => {
    document.title = "Syed Anas – Lingua Skills Certificate";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="/Lingua Skill Certification and Test Report.pdf"
        className="w-full h-full border-none"
        title="Lingua Skills Certificate"
      ></iframe>
    </div>
  );
}
