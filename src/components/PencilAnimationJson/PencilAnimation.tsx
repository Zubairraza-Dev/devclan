"use client";
import React from "react";
import Lottie from "lottie-react";
import pencilAnimation from "./Pencil.json";

const PencilAnimation = () => {
  return (
    <div className="mt-4">
      <Lottie autoplay loop animationData={pencilAnimation} />
    </div>
  );
};

export default PencilAnimation;
