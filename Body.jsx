import React from "react";

const body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 order-2">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1"
          className=" -rotate-45 h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="2"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="3"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img src="./assets/Hero-Model.png" alt="4" className="absolute h-64 md:h-72 lg:h-[400px]" />
      </div>
      <div className="lg:flex-1 order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host your website in less than 5 minutes</h1>
        <p className="font-lato text-gray-500 ">With Hoster, get your website up and running in no less than 5 minutes wiht the most competitive pricing package available online.</p>
        <form action="" className="flex flex-col gap-4 mt-3 md:flex-row">
          <input type="email" placeholder="Enter Email Address" className="rounded-md px-4 py3 placeholder:text-gray-400"/>
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white"> Join Wishlist </button>
        </form>

        <div className="flex gap-2 mt-2" > 
          <img src="./assets/Checkmark.svg" alt="Check" />
          <p className="font-lato text-gray-500 " > No Spam, ever. Unsubscribe anytime</p>
        </div>
      </div>
      
    </div>
  );
};

export default body;
