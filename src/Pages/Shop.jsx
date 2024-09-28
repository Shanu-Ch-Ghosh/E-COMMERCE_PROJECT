import React from 'react'
import {  useSelector } from 'react-redux'
import ProductCard from '../Component/ProductCard'


const Shop = () => {

    
    const products = useSelector(state=> state.product)
    

  return (
    <div>
        <h1 className='text-center text-2xl font-bold m-8'>SHOP</h1>
    <div className='grid grid-cols-5 gap-5'>
        {products.products.map((product)=>{
            return <ProductCard key={product.id} product={product} />
        })}
    </div>
    </div>
  )
}

export default Shop