import React from 'react'
import Option from './Option';
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineShop } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BiBookAlt } from "react-icons/bi";

function Options() {

    const data = [
        {
          icon: <TbDiscount2 size={25} />,
          des: "Best Offers",
        },
        {
          icon: <AiOutlineShop size={25} />,
          des: "Sell with Us",
        },
        {
          icon: <TbTruckDelivery size={25} />,
          des: "Track Order",
        },
        {
          icon: <BiBookAlt size={25} />,
          des: "Blog",
        },
      ];

  return (
    <div>
        {data.map((val, i) => (
          <Option val={val} key={i} />
        ))}
    </div>
  )
}

export default Options