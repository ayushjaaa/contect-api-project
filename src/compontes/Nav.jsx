import React, { useState, useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const { products } = useContext(ProductContext);

  // Ensure products exist before reducing
  let distinct_category = products
    ? [...new Set(products.map((product) => product.category))]
    : [];

  console.log(distinct_category);

  return (
    <div className="w-64 bg-gray-100 p-4 border-r">
      <button className="w-full mb-4 bg-blue-500 text-white py-2 px-4 rounded">
        Add Product
      </button>
      <hr className="my-4" />
      <p className="font-semibold mb-2">Category Filter</p>

      <div className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link to={`/category/${c}`} key={i} className="flex items-center mb-3">
            <span className="rounded-full w-[15px] h-[15px] bg-blue-100"></span>
            <span className="ml-2">{c}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
