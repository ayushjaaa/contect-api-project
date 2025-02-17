import React from 'react'
import Nav from './nav'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
const Home = () => {
 const {products} =   useContext(ProductContext)
 console.log(products)
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
                  <Link key={products.id} to={`/details/${elem.id}`} className="border rounded overflow-hidden shadow-md">
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
