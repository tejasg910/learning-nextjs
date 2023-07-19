"use client"
import React from 'react'
import { useState, useEffect } from 'react'
const ProductList = () => {
const [product, setProducts] = useState([])
    useEffect(async() => {

        async function fetchData() {
            const res  = await fetch("https://dummyjson.com/products");
            const data  = await res.json();
      
            console.log(data)
      
            setProducts(data.products)
          }
          fetchData();
    
    }, []);
  return (
    <div>
{
product.map((item,index)=>{
    return (
        <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={item.thumbnail} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    )
})
}


    </div>
  )
}

export default ProductList