import React from 'react'
import { FaStar } from "react-icons/fa";

function Product({product}) {
  return (
    <div className=' w-1/5 h-fit flex-shrink-0 rounded-xl p-3 inline-block bg-zinc-100/15 overflow-hidden'>
        <div className='h-40 w-full rounded-md overflow-hidden bg-zinc-100/10'>
          <img src={product.thumbnail} className='h-full w-full object-cover' alt="" />
        </div>
        <h1 className='leading-none mt-2 truncate'>{product.title}</h1>
        <div className='flex justify-between'>
        <h1 className='text-sm text-white/60 truncate'>{product.category}</h1>
        <h2 className='flex gap-1 items-center leading-none text-sm py-1 px-2 bg-green-600 scale-75 rounded-[3.4px]'>{product.rating?.toFixed(1)} <FaStar className=' scale-90 text-xs' /></h2>
        </div>
        <p className='mt-4 leading-none'>₹{Math.floor(product.price* 87)}</p>
        <p className=' text-green-400 text-xs'>Free Delivery</p>
        {/* we can add rating also */}
    </div>
  )
}

export default Product