import { useEffect } from "react";

export default function DTI_CERTIFICATE() {
  useEffect(() => {
    document.title = "Syed Anas – DTI Certificate";
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <iframe
        src="DTI CERTIFICATE FOR IDEA.pdf"
        className="w-full h-full border-none"
        title="DTI Certificate"
      ></iframe>
    </div>
  );
}
