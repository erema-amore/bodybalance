import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder } from '../../store/cart/cartAction';
import MyOrderItem from './MyOrderItem';

const MyOrder = () => {
    const { carts, loading } = useSelector(state => state.carts);
    console.log(carts);

    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getOneOrder());
    }, []);

  return (
    <>
        { loading ? (
            <h3>Loading...</h3>
        ) : (
            <>
            <div>
                {/* {carts.map(cart => (
                    <MyOrderItem key={cart.id} cart={cart} />
                ))}     */}
            </div>
            </>
        ) }
    </>
  )
}

export default MyOrder 