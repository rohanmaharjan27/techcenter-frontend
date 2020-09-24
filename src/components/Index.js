import React from "react";
import CarouselMain from "./CarouselMain";

const Index = () => {
  const title = () => {
    document.title = "TechCenter";
  };
  return (
    <div>
      <title>{title()}</title>
      <h2>TechCenter Home</h2>
      <CarouselMain />
    </div>
  );
};

export default Index;
