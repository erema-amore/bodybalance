import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder, getOrders } from '../../store/cart/cartAction';
import MyOrderItem from './MyOrderItem';
import styles from '../../style/myOrder.module.css'; 

const MyOrder = () => {
  const { loading, orders } = useSelector(state => state.cart);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className={styles.myOrder_main}>
    <div className={styles.myOrderContainer}>
      <h2 className={styles.myOrderHeader}>My Orders</h2>
      <ul className={styles.myOrderList}>
        {orders.map(order => (
          <li key={order.id} className={styles.myOrderItem}>
            <MyOrderItem cart={order.cart} />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default MyOrder;







// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getOneOrder, getOrders } from '../../store/cart/cartAction';
// import MyOrderItem from './MyOrderItem';

// const MyOrder = () => {
//     const { loading, orders } = useSelector(state => state.cart);

//     const dispatch = useDispatch();
  
//     useEffect(() => {
//         dispatch(getOrders());
//     }, []);

//     console.log(orders);

//   return (

//     <div>
//     <h2>My Orders</h2>
//     <ul>
//       {orders.map(order => (
//         <li key={order.id}>
//           <MyOrderItem cart={order.cart} />
//         </li>
//       ))}
//     </ul>
//   </div>
  
//     // <>
//     //     { loading ? (
//     //         <h3>Loading...</h3>
//     //     ) : (
//     //         <>
//     //         <div>
//     //             {orders.map(order => (
//     //                 <MyOrderItem key={order.id} cart={order} />
//     //             ))}
//     //         </div>
//     //         </>
//     //     ) }
//     // </>
//   )
// }

// export default MyOrder 