import { useEffect } from "react";

export default function Salesforce_Certificate() {
  useEffect(() => {
    document.title = "Syed Anas – Salesforce Certificate";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="/Certificates/Salesforce Certified Agentforce Specialist AI-201 Certificate.pdf"
        className="w-full h-full border-none"
        title="Salesforce Agentforce Certificate"
      ></iframe>
    </div>
  );
}
