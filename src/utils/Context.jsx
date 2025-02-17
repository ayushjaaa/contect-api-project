import axios from 'axios';
import React from 'react'
import  { useState,useEffect} from 'react';

import {createContext} from 'react'
export const ProductContext = createContext();






const Context = (props) => {
    const [products, setproducts] = useState(null)
    const getProducts = async() =>{
        try{
    const {data} = await axios("https://fakestoreapi.com/products")
setproducts(data)
        }catch(error){
    console.log(error)
        }
    }
    useEffect(() => {
    getProducts()
    
      
    }, [])
    console.log(props.children)

  return (
 <ProductContext.Provider value={{products,setproducts}} >
    {props.children}
 </ProductContext.Provider>
  )
}

export default Context
