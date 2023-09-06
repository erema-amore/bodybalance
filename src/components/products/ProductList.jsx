import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsAction';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';



const ProductList = () => {
    const { products, loading } = useSelector(state => state.products);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProducts());
    }, []);

  return (
    <>
        { loading ? (
            <h3>Loading...</h3>
        ) : (
            <div>
                <button onClick={() => {navigate('/product-create'); }} >ADD NEW PRODUCT</button>
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}    
            </div>
        ) }
    </>
  )
}

export default ProductList  