import { useEffect } from "react";

export default function Visa_Hackathon() {
  useEffect(() => {
    document.title = "Syed Anas – VISA 24-hr HACKATHON CERTIFICATE";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="/Syed Anas - NEXORA - VISA HACKATHON Certificate.pdf"
        className="w-full h-full border-none"
        title="VISA 24hr HACKATHON CERTIFICATE"
      ></iframe>
    </div>
  );
}
