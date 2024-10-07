"use client"
import React from 'react';
import Player  from 'lottie-react';


interface PencilAnimationProps {
    animationData? : any;
}

const PencilAnimation: React.FC<PencilAnimationProps> = ({ animationData }) => {
  return (
    <div className="animation-container">
      <Player
        autoplay
        loop
        animationData={animationData}  // Use the passed animation data here
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default PencilAnimation;
