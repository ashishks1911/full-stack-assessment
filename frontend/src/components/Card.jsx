import React from 'react'
import { api } from '../util/ApiFunctions'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Card = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className='w-[200px] shadow-lg rounded-lg cursor-pointer'>
      <div className='p-1 relative h-60' onClick={() => navigate(`/${product.id}`)}>
        <img src={api.defaults.baseURL + product.imageUrl} alt="" className='h-full w-full' />
        <span className='absolute top-3 left-2 text-xs bg-white text-red-800 font-bold rounded-2xl px-1'>{product.category}</span>
      </div>
      <div className='px-2'>
        <h1 className='text-sm font-bold py-1'> {product.name}</h1>
        <h2 className='text-xs'> {product.brand}</h2>
        <div>
          <div className='flex justify-between my-2'>
            <h2 className='text-sm py-2 font-bold text-red-500'>₹{product.price}</h2>
            <button className='px-2 font-bold text-sm bg-amber-500 text-white rounded-2xl cursor-pointer'
              onClick={() => { toast.info("Work in progress...") }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
