import React from "react";
import workerpatient from "../../img/worker-patient.jpg"; // Placeholder image, replace with actual image path

const Apply = () => {
  return (
    <div className="relative h-full w-full">
      <div className="xs:mx-[30px] md:mx-[50px] lg:mx-[70px] my-[30px]">
        <div className="flex flex-col justify-normal md:flex-row md:justify-between pt-8">
          <div className="w-full md:w-1/2 h-[460px]">
            <img
              src={workerpatient}
              alt="Hospital worker speaking to patient"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full pb-6 pl-0 pt-6 md:pb-0 md:w-1/2 md:pr-10 md:pt-0 md:pl-[50px]">
            <p className="text-2xl md:text-3xl lg:text-4xl font-lato font-semibold md:font-bold">
              CRISIS STAFFING WORK OPPORTUNITIES
            </p>
            <br></br>
            <p className="text-lg font-semibold">
              Will you be ready when patients need care? - HCSS HealthCare
            </p>
            <br></br>
            <p className="text-xl font-lato">
              HCSS is looking for top talent, skilled healthcare professionals
              to join our team for healthcare staffing assignments. This work is
              for those that can hit the ground running. We offer great pay for
              exciting short term assignments. Submit your profile for our team
              to review and connect with you.
            </p>
            <br></br>
            <a
              href="https://eww819.infusionsoft.app/app/form/rn-allied-general-survey-form-submitted?cookieSearchStarted=true&cookieUUID=4fe2e91e-c996-4ca4-8a76-b3ecf1f522af"
              target="_blank"
              className="text-center px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md shadow-gray-700 cursor-pointer"
            >
              APPLY NOW
            </a>
          </div>
        </div>
        <div className="w-full border-b-2 border-black pt-16"></div>
        <p className="text-2xl md:text-3xl lg:text-4xl pt-10 font-lato font-semibold md:font-bold">
          JOIN HEALTHCARE STAFFING SOLUTIONS INC.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between pt-[40px]">
          <div className="w-full md:w-[70%] text-lg font-lato">
            <p>
              <span className="font-semibold">Rewarding Assignments –</span>
              When you work with HCSS you will be providing care to communities
              and patients that will appreciate you, your skills, and your
              knowledge. Healthcare staffing assignments range from community
              hospitals to some of the most prestigious teaching hospitals in
              the nation. The shifts are generally twelve hour assignments from
              a few days to a few weeks. We staff all clinical staff positions
              in nursing, allied and technical, and ancillary non-clinical
              support staff. It is important that all positions are provided to
              ensure the best patient care.
            </p>
            <br />
            <p>
              <span className="font-semibold">Great Pay –</span> HCSS offers
              high paying healthcare positions for crisis events that are
              generally short term in length. Most of our workforce will take
              time off from full-time positions, reschedule per diem, or take
              PTO for the earning potential of these events that happen from
              time to time. Transportation, housing, and support are provided by
              our on-site team working with you to make your assignment
              successful and enjoyable. We value you on our team.
            </p>
          </div>
          <div className="w-full md:w-[25%] pt-[23px] md:pt-0">
            <p className="text-2xl font-semibold font-lato">
              OPPORTUNITY IS YOURS
            </p>
            <br />
            <p className="text-lg font-lato">
              When you work with HCSS you will be part of our team. We will be
              there with you on assignments, and make sure you are cared for and
              have a successful experience. We truly appreciate and show
              gratitude to all those who work with us.
            </p>
            <br />
            <a
              href="https://eww819.infusionsoft.app/app/form/rn-allied-general-survey-form-submitted?cookieSearchStarted=true&cookieUUID=4fe2e91e-c996-4ca4-8a76-b3ecf1f522af"
              target="_blank"
              className="text-center px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md shadow-gray-700 cursor-pointer"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
