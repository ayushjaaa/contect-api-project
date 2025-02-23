import React, { useEffect ,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const Details = () => {
  const { id } = useParams();
  const [products, setproducts] = useState(null)

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${id}`);
      console.log(data);  // Should log data now
      setproducts(data)
    } catch (error) {
      console.log(error);
    }
  };
  if(products && products.length >0){
    console.log(products)
  }

  useEffect(() => {
    getsingleproduct(); // Fetch the product when component mounts
  }, [id]);

  return (
    <div className="w-full flex flex-wrap items-center  justify-center h-full bg-red-100 p-6">
     {
        products ? products.map((elem)=>{
          return(
            <div>
               <div className="flex w-72 gap-8 flex-col items-center max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <img
          className="w-[50%] h-[50%] object-cover rounded-md"
          src={elem.image}
          alt="Fjallraven Backpack"
        />
        <div className="content mt-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            {products.title}
          </h1>
          <h2 className="text-xl font-bold text-gray-600 mt-2">{elem.price}</h2>
          <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
            {elem.description
}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="#"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Edit
            </Link>
            <Link
              to="#"
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Delete
            </Link>
          </div>
        </div>
      </div> 
            </div>
          )
        }) :<Loading/>
     }
    </div>
  );
};

export default Details;
