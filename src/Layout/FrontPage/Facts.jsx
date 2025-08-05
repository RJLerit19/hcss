import React from "react";
import FactsCountUp from "../../Component/FactsCountUp";

const Facts = () => {
  return (
    <div className="relative h-full w-full pt-[50px]">
      <div className="xs:mx-[30px] md:mx-[50px] lg:mx-[70px] my-[30px]">
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-[60px]">
          A FEW FACTS ABOUT OUR COMPANY
        </p>

        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col flex-wrap w-full md:w-[48%]">
            <FactsCountUp
              start={0}
              end={185}
              title="Staffed Strike and Crisis Assignments"
            />
            <FactsCountUp
              start={0}
              end={1573}
              title="Overall Clinicians Staffed"
            />
          </div>
          <div className="flex flex-col flex-wrap pt-5 w-full md:w-[48%]">
            <FactsCountUp
              start={0}
              end={175}
              title="Hospitals we have worked with"
            />
            <FactsCountUp
              start={0}
              end={5230}
              title="Patients Helped by HCSS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
