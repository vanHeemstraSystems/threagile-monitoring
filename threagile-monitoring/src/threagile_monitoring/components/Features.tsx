import React from 'react';
import { Shield, Zap, RefreshCw, Bell } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Threat Detection",
    description: "Advanced algorithms to identify and analyze potential security threats in real-time"
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Immediate alerts and automated responses to security incidents"
  },
  {
    icon: RefreshCw,
    title: "Agile Integration",
    description: "Seamlessly integrates with your agile development workflow"
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Customizable notifications for different threat levels and security events"
  }
];

export const Features = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-darkGray mb-16">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-neonBlue transition-all duration-300 group"
            >
              <feature.icon className="h-12 w-12 text-neonBlue mb-4 group-hover:animate-glow" />
              <h3 className="text-xl font-semibold text-darkGray mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;