import React from 'react'
import Header from './Header'
import Routing from '../utils/Routing'



function Content() {
  
  return (
    <div className="h-full w-[80%] flex flex-col pr-8 pb-8">
      <Header /> 
      <Routing />
      </div>
  )
}

export default Content