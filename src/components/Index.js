import React from "react";
import NavbarMain from "./NavbarMain";
import CarouselMain from "./CarouselMain";

const Index = () => {
  const title = () => {
    document.title = "TechCenter";
  };
  return (
    <div>
      <NavbarMain />
      <CarouselMain />
      <h4>TechCenter</h4>
    </div>
  );
};

export default Index;
