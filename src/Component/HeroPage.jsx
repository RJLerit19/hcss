import React from "react";

const HeroNurse = (props) => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full xs:h-[300px] md:h-[400px] flex justify-center items-center pt-[70px] bg-gray-800">
        <p className="text-center font-bold xs:text-3xl md:text-5xl tracking-wide text-primary">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default HeroNurse;
