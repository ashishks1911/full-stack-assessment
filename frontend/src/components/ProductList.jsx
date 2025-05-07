import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../util/ApiFunctions'
import { toast } from 'react-toastify';
import Card from './Card';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    }).catch((error) => {
      toast.error(error);
    })

  }, [])

  return (
    <div className='m-12'>
      {console.log(products)}
      {
        isLoading ? <p>"Loading Products..."</p>
          : <>

            <div className='flex gap-2 justify-start'>
              {
                products.map((product, index) => (
                  <Card product={product} key={index} />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default ProductList
