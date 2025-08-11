import React from "react";

const HorizontalCard = (props) => {
  return (
    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm xs:mb-5 md:flex-row md:max-w-[48%]  dark:border-gray-700 dark:bg-gray-800">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <a className="text-center px-5 py-2 bg-primary rounded-lg text-white font-semibold hover:bg-blue-600 shadow-md shadow-blue-400 cursor-pointer">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default HorizontalCard;
