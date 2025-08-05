import React from "react";
import CountUp from "react-countup";

const FactsCountUp = (props) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-sm xs:mb-5 w-full h-[150px] bg-gray-800 rounded-2xl">
      <CountUp
        enableScrollSpy={true}
        start={props.start}
        end={props.end}
        duration={3}
        className="text-5xl font-bold pb-2 text-primary"
      />
      <p className="text-lg tracking-wide text-white text-center">
        {props.title}
      </p>
    </div>
  );
};

export default FactsCountUp;
