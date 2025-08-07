import React from 'react'
import { NavLink } from 'react-router-dom'

function Option({val}) {
  const path = val.des.replace(/\s+/g, '-').toLowerCase();
  return (
    <NavLink to={`/${path}`} className="flex items-center gap-2 px-6 py-4 opacity-100 transition-all" style={(e)=>{
      if(!e.isActive)
      {
        return {
          opacity: .75,
        }
      }
    }}>
        {val.icon}
        <h1>{val.des}</h1>
    </NavLink>
  )
}

export default Option