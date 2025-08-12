import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="relative flex justify-center">
        <div className="absolute w-[80px] h-[80px] rounded-full border-2 border-primary top-5 z-index-10"></div>
      </div>
      <div class="max-w-md h-[350px] p-6 mb-5 border rounded-2xl shadow-sm bg-gray-800 border-gray-700">
        <div className="flex justify-center">{props.icon}</div>
        <a href="#">
          <h5 class="mb-2 pt-3 text-2xl text-center font-bold tracking-tight text-white">
            {props.title}
          </h5>
        </a>
        <p class="mb-3 ml-6 font-normal text-gray-300">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
