import axios from "../utils/Axios";
import React, { createContext, useEffect, useState } from "react"

export const ProductContext = createContext();


function Context(props) {
  const [product, setproduct] = useState([]);
  
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

  return <ProductContext.Provider value={{product, setproduct}}>{props.children}</ProductContext.Provider>
}

export default Context