import React from "react";

const ContactForm = () => {
  return (
    <div className="relative h-full w-full">
      <div className="xs:mx-[30px] md:mx-[50px] lg:mx-[70px] my-[30px]">
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6">
          HCSS HEALTHCARE STAFFING
        </p>
        <div className="relative flex flex-col items-center pb-[150px]">
          <div className=" w-full border-b-2 border-black pt-2"></div>
          <p className="text-3xl font-semibold font-lato pt-10 pb-6">
            Drop us a Line!
          </p>
          <div className="w-full lg:w-1/2">
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
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
