import { useEffect } from "react";

export default function VR_Sidhartha_Hackathon() {
  useEffect(() => {
    document.title = "Syed Anas – VR SIDDHARTHA HACKATHON CERTIFICATE";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="/VR SIDHARTHA HACKATHON CERTIFICATE.pdf"
        className="w-full h-full border-none"
        title="VR SIDDHARTHA CERTIFICATE"
      ></iframe>
    </div>
  );
}
