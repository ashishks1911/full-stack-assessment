import React from 'react'
import { api } from '../util/ApiFunctions'

const Card = ({ product }) => {
  return (
    <div className='w-[200px] shadow-lg rounded-lg'>
      <div className='p-2'>
        <img src={api.defaults.baseURL + product.imageUrl} alt="" />
      </div>
      <div className='px-2'>
        <div className='flex justify-between'>
          <h1> {product.name}</h1>
          <span>{product.category}</span>
        </div>
        <div>
          <h2>{product.description}</h2>
          <h2>{product.price}</h2>
          <h2>{product.brand}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
