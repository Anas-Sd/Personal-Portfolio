import { useEffect } from "react";

export default function Azure_Certificate() {
  useEffect(() => {
    document.title = "Syed Anas – Azure Certificate";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="/MICROSOFT AZURE AZ-900 CERTIFICATE.pdf"
        className="w-full h-full border-none"
        title="Azure Certificate"
      ></iframe>
    </div>
  );
}
