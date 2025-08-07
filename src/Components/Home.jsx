import React from 'react'
import Banners from './Banners'
import Products from './Products'

function Home() {
  return (
    <div className="h-5/6 w-full flex flex-col gap-6 overflow-hidden ">
        <Banners/>
        <Products />
      </div>
  )
}

export default Home