import React from "react";
import { Shield, Telescope } from "lucide-react";

export const Hero = () => {
  return (
    <div
      className="relative h-screen min-h-screen flex items-center justify-center !bg-[#222222] overflow-hidden"
      style={{ backgroundColor: "#222222" }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            height: "100%",
            width: "100%",
            background: `
              linear-gradient(#33C3F0 1px, transparent 1px),
              linear-gradient(90deg, #33C3F0 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-up">
          <div className="flex justify-center mb-8">
            <Shield
              className="h-16 w-16 !text-[#33C3F0] animate-glow"
              style={{ color: "#33C3F0" }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Threagile Monitoring
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Secure your software with real-time threat modeling and agile
            security monitoring
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-neonBlue text-white rounded-lg hover:bg-opacity-80 transition-all duration-300 flex items-center gap-2">
              <Telescope className="h-5 w-5" />
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
