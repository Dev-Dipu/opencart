import React from 'react'
import Banner from './Banner'
import img from '../assets/images/herobanner.jpg'
import img2 from '../assets/images/herobanner2.jpg'

function Banners() {
    const data = [
        {
          imgsrc: img,
          width: "w-2/3"
        },
        {
          imgsrc: img2,
          width: "w-1/3"
        },
      ]
  return (
    <div className="banners w-full h-[44%] flex gap-6">
          {data.map((dets, i)=>(
            <Banner dets={dets} key={i} />
          ))}
          
        </div>
  )
}

export default Banners