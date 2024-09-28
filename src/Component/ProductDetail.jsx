import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        const newProduct = products.find(product => product.id === parseInt(id));
        setProduct(newProduct);
    }, [id]);

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 h-[600px]">
            <div className="flex items-center space-x-10 bg-white shadow-lg rounded-lg p- overflow-hidden mt-10 w-[50%]">
                <div className="p-4">
                    <img className="w-[350px] h-[350px]" src={product.image} alt='Product image was not found' />
                    <div className="mt-4">
                        <h1 className="text-xl font-semibold">Product Description</h1>
                        <p className="text-gray-600 w-[400px]">{product.des}</p>
                    </div>
                </div>
                <div className="p-4 flex flex-col">
                    <div>
                        <h1 className="text-2xl font-bold">{product.title}</h1>
                        <p className="text-lg text-green-600">Rs. {product.price}/-</p>
                        <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Add to Cart</button>
                    </div>
                    <div className="mt-4">
                        <p className="font-xl">Delivery & Return</p>

                        <div className='flex items-center space-x-2'>
                        <span className='text-slate-800 text-lg font-bold'>?</span>
                        <p className="text-blue-500 cursor-pointer hover:underline"> Ask your Question</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

