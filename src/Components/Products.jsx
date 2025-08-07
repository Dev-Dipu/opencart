import React, { useContext, useRef } from 'react'
import Product from './Product'
import { ProductContext } from '../context/Context'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Products() {
  const { product } = useContext(ProductContext)
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative w-full h-full">
      <div className='flex justify-between items-center pb-4'>
        <h1 className="text-xl leading-none">Suggested Items</h1>
      <div className="flex items-center gap-1.5">
        {/* Scroll Buttons */}
      <button
        className="hover:text-white/90 text-white shadow-md"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={18} />
      </button>

      <button
        className="hover:text-white/90 text-white shadow-md"
        onClick={scrollRight}
      >
        <FaChevronRight size={18} />
      </button>
      </div>
      </div>

      

      {/* Horizontal Scrollable Product List */}
      <div
        ref={scrollRef}
        className="w-full h-full overflow-x-auto whitespace-nowrap scrollbar-hidden flex gap-3 scroll-smooth px-0.5"
      >
        {product.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Products
