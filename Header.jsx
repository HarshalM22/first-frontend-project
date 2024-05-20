import React from "react";
import { FaBars } from "react-icons/fa";

const header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="logo"  />
        <button className="bg-gradient-to-r from-orange-400 to-red-600 rounded-2xl text-white px-2.5 py-1.5" > Hoster is hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-Lato text-gray-500 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ul>
      <div className="hidden ig:flex justify-center items-center font-Lato gap-6">
        <a href="">Sign in</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join waitlist</button>
      </div >
      <div className="pt-3 lg:hidden">
        < FaBars/>
      </div>
    </div>
  );
};

export default header;
