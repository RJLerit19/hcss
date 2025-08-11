import React from "react";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiMentalHealthLine } from "react-icons/ri";
import "../../index.css"; // Ensure custom styles are applied

const MissionVision = () => {
  return (
    <div className="relative h-full w-full">
      <div className="xs:mx-[30px] md:mx-[50px] lg:mx-[70px] my-[30px]">
        <div className="flex justify-between pt-8 h-[full]">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <MdOutlineHealthAndSafety className="my-custom-icon" size={400} />
            </div>
            <p className="text-3xl font-bold tracking-widest">OUR</p>
            <p className="xs:text-3xl sm:text-5xl font-bold tracking-widest">
              MISSION
            </p>
            <p className="text-lg md:text-2xl tracking-wide font-lato pt-10 pr-0 lg:pr-10">
              is to provide our clients with quick healthcare staffing solutions
              and the best patient care possible during a labor disruption or
              sudden urgent event where qualified healthcare staff is needed
              quickly. We fill all nursing disciplines, technician and ancillary
              positions. As your partner, our promise is to support your
              facility during difficult times and keep costs low.
            </p>
          </div>
          <div className="w-full lg:w-1/2 xs:hidden lg:block">
            <img src={img1} />
          </div>
        </div>

        <div className="flex justify-between h-full">
          <div className="w-full lg:w-1/2 xs:hidden lg:block">
            <img src={img2} />
          </div>
          <div className="relative w-full lg:w-1/2 pl-0 lg:pl-[50px] pt-10">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <LiaCertificateSolid className="my-custom-icon" size={400} />
            </div>
            <p className="text-3xl font-bold tracking-widest">WE ARE</p>
            <p className="xs:text-3xl sm:text-5xl font-bold tracking-widest">
              EXPERIENCED
            </p>
            <p className="text-lg md:text-2xl tracking-wide font-lato pt-10 pr-0 lg:pr-10">
              The HealthCare Staffing Solutions' leadership has been providing
              emergency support to healthcare facilities for over thirty years.
              Our team has helped staff some of the largest and most complicated
              healthcare strikes. We make it our priority to provide experienced
              clinical talent to care for your patients and community.
            </p>
          </div>
        </div>

        <div className="flex justify-between h-full">
          <div className="relative w-full lg:w-1/2 pt-10">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <RiMentalHealthLine className="my-custom-icon" size={400} />
            </div>
            <p className="text-3xl font-bold tracking-widest">
              OUR PRIORITY IS
            </p>
            <p className="xs:text-3xl sm:text-5xl font-bold tracking-widest">
              PATIENT CARE
            </p>
            <p className="text-lg md:text-2xl tracking-wide font-lato pt-10 pr-0 lg:pr-10">
              We specialize in quickly filling assignments with qualified
              healthcare professionals that have proven experience in the area
              they are assigned to work. All staff is carefully screened and
              credentialed to meet your facility File Requirements and comply
              with Joint Commissions standards to provide the best patient care
              possible.
            </p>
          </div>
          <div className="w-full lg:w-1/2 xs:hidden lg:block">
            <img src={img3} />
          </div>
        </div>

        <div className="w-full border-b-2 border-black pt-16"></div>
        <p className="text-2xl md:text-3xl lg:text-4xl pt-10 font-lato font-semibold md:font-bold">
          PROTECT YOUR INTERESTS AND YOUR PATIENTS
        </p>
        <p className="text-lg font-lato pt-6">
          A partnership with HCSS HealthCare Staffing Solutions will protect
          your interests, your patients, and your community. We will consult
          with your team on strike planning preparation, and enable labor
          negotiations to take place in a confident manner. You will know the
          potential cost impact of strike support and cost triggers for
          negotiation strategy. Should you face a crisis that impacts your
          services we are ready to provide the needed support. We will tailor a
          proposal that will work for you, and offer a fee structure that is
          designed to keep costs low and scale with your needs. Our guarantee is
          to provide the healthcare staffing you need to keep your facility
          running smoothly without disruption to revenue streams.
        </p>
        <p className="text-lg font-lato pt-6">
          Contact us for more details and a proposal.
        </p>
        <p className="text-lg font-lato pt-6">HCSS is here to serve you!</p>
        <div className="relative flex flex-col items-center">
          <p className="pt-[50px] text-2xl font-semibold text-center">
            Healthcare Facilities - Complete for Proposal Request
          </p>
          <div className=" w-[90%] lg:w-3/5 border-b-2 border-black pt-2"></div>
          <div className="w-full lg:w-1/2 pt-6">
            <div class="relative mb-4">
              <input
                type="text"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                class="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name*
              </label>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div class="relative mb-4">
              <input
                type="email"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                class="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email*
              </label>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <textarea
              className="block w-full border p-4 border-black text-md text-black rounded-lg focus:outline-none focus:ring-primary focus:border-primary bg-gray-100 mb-4"
              placeholder="Message Detail*"
              rows={4}
            ></textarea>
          </div>
          <button className="text-center px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md shadow-gray-700 cursor-pointer">
            SUBMIT PROPOSAL REQUEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
