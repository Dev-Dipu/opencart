import React from 'react'
import { MdOutlineExpandMore } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";

function Header() {
  return (
    <div className='w-full pb-10 pt-8 flex items-center'>
      
      <div className='w-[65%] p-2 bg-zinc-100/15 rounded-full flex gap-3'>
        <div className='px-3 py-2 bg-zinc-100/15 rounded-full leading-none font-regular flex gap-1'>Categories <MdOutlineExpandMore />
        </div>
        <input className='capitalize bg-transparent w-full focus:outline-none' type="text" placeholder='Search'/>
        <FiSearch size={30} className='mr-2' />
      </div>
      <div className=' flex gap-6 flex-grow items-center justify-end'>
      <div className='flex gap-6'>
      <FaRegBell size={25} />
      <FaRegHeart size={25} />
      <span className='flex gap-2'><MdOutlineShoppingBag size={25}/>2</span>
      </div>
      <span className='w-[1.8px] h-8 bg-white/10'></span>
      <div className='p-[1.8px] border-2 border-zinc-50/20 rounded-full'>
        <img className='h-8 w-8 rounded-full' src="https://lh3.googleusercontent.com/a/ACg8ocJlm0kEJ2Cnwfz5YBvEqxL_5qxWNp7weZl2jMG_qsMo3K1Zb-_L=s360-c-no" alt="" />
      </div>
      </div>
      </div>
  )
}

export default Header