import { useEffect } from "react";

export default function Oracle_FA_Certificate() {
  useEffect(() => {
    document.title = "Syed Anas – Oracle Foundations Associate Certificate";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="/Oracle Certified Foundations Associate Certificate.pdf"
        className="w-full h-full border-none"
        title="Oracle Foundations Associate"
      ></iframe>
    </div>
  );
}
