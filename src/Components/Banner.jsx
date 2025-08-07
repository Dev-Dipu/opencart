import React from 'react'

function Banner({dets}) {
  return (
    <div className= {`${dets.width} h-full bg-zinc-100/15 rounded-xl overflow-hidden`} >  
          <img className="h-full w-full object-cover" src={dets.imgsrc} alt="" />
          </div>
  )
}

export default Banner