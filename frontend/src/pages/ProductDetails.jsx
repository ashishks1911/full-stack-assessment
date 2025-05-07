import React, { useEffect, useState } from 'react'
import { api, findProductById } from '../util/ApiFunctions'
import { data, Link, useParams } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);


  useEffect(() => {
    findProductById(id).then((data) => {
      setProduct(data)
      console.log(data)
    }).catch((error) => {
      toast.error(error);
    })

  })


  return (
    <div className='ml-26 mt-14'>
      <div className='my-3'>
        <Link to={'/'}>
          <IoArrowBack className='w-12 h-12' />
        </Link>
      </div>
      <div className='grid grid-cols-2 w-[50%] h-[400px] gap-4 shadow-lg p-2'>
        <div className='overflow-hidden'>
          <img src={api.defaults.baseURL + product.imageUrl} alt="" className='h-full w-full' />
        </div>
        <div className='relative'>
          <h1 className='text-3xl font-bold py-2'>{product.name}</h1>
          <h2 className='text-xl text-gray-500'>{product.description}</h2>
          <h1 className='text-4xl my-6'>₹ {product.price}</h1>
          <div className='absolute bottom-3'>
            <button className='p-3 font-bold text-2xl bg-amber-500 text-white rounded-md'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
