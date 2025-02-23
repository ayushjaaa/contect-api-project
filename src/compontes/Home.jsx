import React, { useEffect } from 'react'
import Nav from './nav'
import {Link,useLocation} from 'react-router-dom'
import {useContext,useState} from 'react'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from 'axios'

const Home = () => {
//   const{products}  =  useContext(ProductContext)
    const [filterProducts, setfilterProducts] = useState()
 const {products} = useContext(ProductContext)
const {search} = useLocation()
 const category = decodeURIComponent(search.split("=")[1]);
 
//  console.log(category)
 const getproductcategory = async () =>{
    try{
const {data} = await axios.get(`/products/category/${category}`)
    }
    catch(error){
console.log(error)
    }
 }
//  console.log(products)
useEffect(() => {
  if(!filterProducts) setfilterProducts(products)
    if(category != "undefind") getproductcategory()
}, [])

  return (
    <div>
         <div className="flex h-screen">
    {/* Sidebar */}
 <Nav/>

    {/* Main Content */}
    <div className="flex-1 p-6 grid grid-cols-3 gap-4">
    {products ? products.map((elem,index)=>{
        return(
            <div>
                  <Link  key={elem.id} to={`/category/${elem.id}`} className="border rounded overflow-hidden shadow-md">
        <img 
          src={elem.image} 
          alt="Product" 
          className="w-full h-40 object-cover" 
        />
        <div className="p-4">
          <p className="text-sm text-gray-600">{elem.description}</p>
        </div>
      </Link>
            </div>
        )
    }) : <Loading/>}

    </div>
  </div>
    </div>
  )
}

export default Home
