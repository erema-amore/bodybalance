import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsAction';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';
import style from '../../style/productList.module.css'



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
            <h3 className={style.productList__loading}>Loading...</h3>
        ) : (
            <>
            <button className={style.productList__btn_addNewProd} onClick={() => {navigate('/product-create'); }} >ADD NEW PRODUCT</button>
            <div className={style.productList}>
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}    
            </div>
            </>
        ) }
    </>
  )
}

export default ProductList  