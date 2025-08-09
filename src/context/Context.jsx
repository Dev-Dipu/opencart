import axios from "../utils/Axios";
import React, { createContext, useEffect, useState } from "react"

export const ProductContext = createContext();


function Context(props) {
  const [product, setproduct] = useState([]);
  const [cart, setCart] = useState([])

  const addToCart = (p) => {
    setCart(prev => [...prev, p])
  }
  
  useEffect(()=>{
    const getProducts = async() =>{
      try{
        const res = await axios.get('/products?limit=30&skip=77');
        setproduct(res.data?.products);
        console.log(res.data?.products[0])
      }
      catch(err){
        console.log(err)
      }
    }
    getProducts();
  }, []);

  return <ProductContext.Provider value={{product, setproduct, cart, setCart, addToCart}}>{props.children}</ProductContext.Provider>
}

export default Context