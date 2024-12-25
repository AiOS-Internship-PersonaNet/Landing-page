"use client";
import React, { useState, useEffect } from "react";
import Phone from "@/components/SignCall";

const HeroSection = () => {
  const [initialPosition, setInitialPosition] = useState("translateY(100%)");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialPosition("translateY(0)");
    }, 550);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full">
      {/* Background gradient */}
      <div
        className="fixed inset-0"
        style={{
          background: "radial-gradient(circle at 0% 0%, #220138, #2b0399, #220138)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10">
        <Phone />
      </div>
    </section>
  );
};

export default HeroSection;
