import React from 'react'

const MyOrderItem = ({cart}) => {
    
  return (
    <div>
    {cart && (
    <>
    {cart.length ? (
    <>
    <table border="2">
    <thead>
    <tr >
      <th>Name</th>
      <th>Picture</th>
      <th>Price for one</th>
    </tr>
       </thead>
        <tbody>
        {cart.products.productItem.map(product => (
          <tr key={product.id}>
           <td>
            { product.name }
          </td>
          <td>
            <img src={product.picture} alt="error:(" width="50" height="50" />
          </td>
          <td>
            { product.price }
          </td>
          </tr>
          ))}
              </tbody>
              </table>
              <h3>Total cost: ${cart.totalCost}</h3>
            </>
            
          ) : (
            <h3>Cart is empty!</h3>
          )}
        </>
      )}
    </div>
  )
}

export default MyOrderItem