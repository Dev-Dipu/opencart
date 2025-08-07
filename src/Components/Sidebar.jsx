import React from "react";
import { FaOpencart } from "react-icons/fa6";
import Option from "./Option";
import Options from "./Options";
import { TbCategory } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { NavLink } from "react-router-dom";


function Sidebar() {
  return (
    <div className="h-full w-[20%] px-8 py-6 flex flex-col">
      <div className='flex items-center gap-2 pb-4 pt-2'>
      <NavLink to='/'>
      <FaOpencart size={40}/>
      </NavLink>
      <h1 className='text-2xl '>Opencart</h1>
      <h1 className='font-regular text-sm ml-4 mt-1'>En</h1>
      </div>
      <h1 className=" text-3xl px-6 mt-8 font-semibold">Explore</h1>
      <div className="flex items-center justify-between px-6 py-4 my-10 bg-gradient-to-br from-red-600 to-red-900 rounded-md">
        <span className="flex gap-2 items-center">
          <TbCategory size={30} />
          <h1>Categories</h1>
        </span>
        <MdOutlineKeyboardArrowRight size={20} />
      </div>
      <div className="h-full flex flex-col justify-between">
      <Options />
        <Option val={{ icon: <TbSettings size={25} />, des: "Settings" }} />
      </div>
    </div>
  );
}

export default Sidebar;
