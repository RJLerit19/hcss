import React from "react";
import Card from "../../Component/Card";
import { LiaUserNurseSolid } from "react-icons/lia";
import { LiaBookMedicalSolid } from "react-icons/lia";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import workerpatient from "../../img/worker-patient.jpg"; // Placeholder image, replace with actual image path
import "../../index.css"; // Ensure custom styles are applied
const Staffing = () => {
  return (
    <div className="relative h-full w-full">
      <div className="xs:mx-[30px] md:mx-[50px] lg:mx-[70px] my-[30px]">
        <div className="flex justify-around my-[50px] flex-wrap">
          <Card
            icon=<LiaUserNurseSolid className="my-custom-icon" size={70} />
            title="Nursing, Allied & Ancillary Positions"
            description="HCSS HealthCare Staffing Solutions will work with healthcare providers during critical times to staff all nursing positions, allied, ancillary and engineers."
          ></Card>
          <Card
            icon=<LiaBookMedicalSolid className="my-custom-icon" size={70} />
            title="Strike Contingency Planning"
            description="Know your options and potential costs by planning with us. Request our contingency staffing proposal to understand all costs and obligations for services.  We promise to help you avoid a strike by being prepared and to keep costs lower when you engage with HCSS HealthCare Staffing Solutions. "
          ></Card>
          <Card
            icon=<MdOutlineAssignmentTurnedIn
              className="my-custom-icon"
              size={70}
            />
            title="Rewarding Short Term Assignments"
            description="HCSS always seeks to provide the best patient care.  If you are a healthcare worker, we welcome you to submit your profile so that we may consider you for future assignments."
          ></Card>
        </div>
      </div>

      <div className="xs:mx-[30px] md:mx-[50px] lg:mx-[70px] my-[30px]">
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          STRIKE AND CRISIS STAFFING SUPPORT
        </p>
        <div className="w-full border-b-2 border-black pt-5"></div>
        <div className="flex flex-col justify-normal md:flex-row md:justify-between pt-8">
          <div className="w-full pb-6 md:pb-0 md:w-1/2 md:pr-10 xl:pr-[150px]">
            <p className="text-3xl font-bold pb-2">
              HCSS is there when your patients need care
            </p>
            <p className="text-xl font-lato">
              Hospitals and healthcare facilities may encounter urgent nurse
              staffing and other healthcare staffing needs from unseen crisis
              events, or may need to prepare for a potential labor disruption
              from a strike threat. HCSS will partner with you to provide the
              best clinical support for your patients in times of emergencies.
            </p>
            <br></br>
            <p className="text-xl font-lato">
              If you are with a healthcare facility, or if you are a healthcare
              worker, we would love to connect with you. Please click on the
              link below for more information about HCSS strike or emergency
              staffing services and patient care positions. At HCSS, "Patient
              Care Is Our Priority"
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[460px]">
            <img
              src={workerpatient}
              alt="Hospital worker speaking to patient"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffing;
