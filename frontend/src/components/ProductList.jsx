import React, { useContext, useEffect, useState } from 'react'
import { getAllProducts } from '../util/ApiFunctions'
import { toast } from 'react-toastify';
import Card from './Card';
import { SearchContext } from '../context/SearchContext';
import Loader from './Loader';

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {state, setState} = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts().then((data) => {
      setState(data);
      setIsLoading(false);
    }).catch((error) => {
      toast.error(error);
    })

  }, [])

  return (
    <div className='m-12'>
      {console.log(state)}
      {
        isLoading ? <Loader/>
          : <>

            <div className='flex gap-4 justify-start flex-wrap'>
              {
                state.map((product, index) => (
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
