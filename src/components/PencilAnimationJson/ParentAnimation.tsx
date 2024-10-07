import React from "react";
import PencilAnimation from "./PencilAnimation"; // Import child component
import pencilAnimation from "./Pencil.json"; // Import animation data

const ParentComponent = () => {
  return (
    <div>
      <h1>My Lottie Animation</h1>
      {/* Pass the pencilAnimation as a prop to PencilAnimation component */}
      <PencilAnimation />
    </div>
  );
};

export default ParentComponent;
