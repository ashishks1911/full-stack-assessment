import React, { useEffect, useState } from 'react'
import { api, findProductById } from '../util/ApiFunctions'
import { data, Link, useParams } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    findProductById(id).then((data) => {
      setProduct(data)
    }).catch((error) => {
      toast.error(error.message);
      setErrorMessage(error.message);
    })

  })

  if (errorMessage) {
    return (
      <div className='my-3'>
        <Link to={'/'}>
          <IoArrowBack className='w-12 h-12' />
        </Link>
      </div>
    );
  }
  return (
    <div className='lg:ml-26 mt-12 mx-8'>
      <div className='my-3'>
        <Link to={'/'}>
          <IoArrowBack className='w-12 h-12' />
        </Link>
      </div>
      <div className='grid lg:grid-cols-2 grid-rows-[65%_35%] sm:grid-rows-none  lg:w-[50%] md:h-[820px] lg:h-[65%] h-[50%] gap-4 shadow-lg p-2'>
        <div className='overflow-hidden'>
          <img src={api.defaults.baseURL + product.imageUrl} alt="" className='h-full w-full' />
        </div>
        <div className='relative py-3 md:m-2'>
          <h1 className='md:text-3xl text-2xl font-bold md:py-2'>{product.name}</h1>
          <h2 className='text-xl text-gray-500'>{product.description}</h2>
          <h1 className='md:text-4xl md:my-6 text-2xl'>₹ {product.price}</h1>
          <div className='absolute bottom-4'>
            <button className='p-3 font-bold md:text-2xl text-lg bg-amber-500 text-white rounded-lg'
              onClick={() => { toast.info("Work in progress...") }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
