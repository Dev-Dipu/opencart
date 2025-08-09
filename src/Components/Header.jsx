import React, { useContext, useState, useEffect } from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaRegBell, FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { ProductContext } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../utils/Axios'

function Header() {
  const { cart } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Fetch suggestions from API
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim().length === 0) {
        setSuggestions([]);
        return;
      }
      try {
        const {data} = await axios.get(`/products/search?q=${encodeURIComponent(searchTerm)}`);
        console.log(data.data)
        setSuggestions(data?.products || []);
      } catch (err) {
        console.error("Error fetching suggestions:", err);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300); // debounce
    return () => clearTimeout(debounce);
  }, [searchTerm]);

  const handleSelect = (id) => {
    setSearchTerm("");
    setSuggestions([]);
    navigate(`/product/${id}`);
  };

  return (
    <div className='w-full pb-10 pt-8 flex items-center relative'>
      
      <div className='w-[65%] p-2 bg-zinc-100/15 rounded-full flex gap-3 relative'>
        <div className='px-3 py-2 bg-zinc-100/15 rounded-full leading-none font-regular flex gap-1'>
          Categories <MdOutlineExpandMore />
        </div>
        <input
          className='capitalize bg-transparent w-full focus:outline-none'
          type="text"
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch size={30} className='mr-2' />

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-zinc-900/90 backdrop-blur-lg rounded-lg mt-2 shadow-lg z-50 max-h-60 overflow-y-auto">
            {suggestions.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="flex items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <p className="text-white text-sm">{item.title}</p>
                  <p className="text-zinc-400 text-xs">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='flex gap-6 flex-grow items-center justify-end'>
        <div className='flex gap-6'>
          <FaRegBell size={25} />
          <FaRegHeart size={25} />
          <Link to={'/cart'}>
            <span className='flex gap-2'>
              <MdOutlineShoppingBag size={25}/>
              <span className='text-lg'>{cart.length}</span>
            </span>
          </Link>
        </div>
        <span className='w-[1.8px] h-8 bg-white/10'></span>
        <div className='p-[1.8px] border-2 border-zinc-50/20 rounded-full'>
          <img
            className='h-8 w-8 rounded-full'
            src="https://lh3.googleusercontent.com/a/ACg8ocJlm0kEJ2Cnwfz5YBvEqxL_5qxWNp7weZl2jMG_qsMo3K1Zb-_L=s360-c-no"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
