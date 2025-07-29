import React from "react";

const WhatsAppButton = () => {
  const whatsappNumbers = {
    pangani: "+254746656600",
    parklands: "+254798672239",
  };

  const handleWhatsAppClick = (branch: "pangani" | "parklands") => {
    const number = whatsappNumbers[branch];
    const message = encodeURIComponent(
      `Hello! I'm interested in learning more about Bright Sparks School ${
        branch === "pangani" ? "Pangani" : "Parklands"
      } branch. Could you please provide me with more information about admissions and programs?`
    );
    const whatsappUrl = `https://wa.me/${number.replace(
      /[^0-9]/g,
      ""
    )}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group relative">
        {/* Main WhatsApp Button */}
        <img
          src="/assets/whatsapp.png" // Replace with the correct path to WhatsApp icon
          alt="WhatsApp"
          className="w-12 h-12"
        />

        {/* Branch Selection Menu */}
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 min-w-[200px]">
          <div className="p-3 border-b">
            <h3 className="font-semibold text-gray-800 text-sm">
              Contact Us on WhatsApp
            </h3>
          </div>
          <div className="p-2">
            <button
              onClick={() => handleWhatsAppClick("pangani")}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              <div className="font-medium text-gray-800">Pangani Branch</div>
              <div className="text-sm text-gray-600">+254 746656600</div>
            </button>
            <button
              onClick={() => handleWhatsAppClick("parklands")}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              <div className="font-medium text-gray-800">Parklands Branch</div>
              <div className="text-sm text-gray-600">+254 798 672239</div>
            </button>
          </div>
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
