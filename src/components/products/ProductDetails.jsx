import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../store/products/productsAction";
import { clearOneProductState } from "../../store/products/productsSlice";


const ProductDetails = () => {
  const { loading, oneProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
    }, []);
return (
  <>
    {loading ? ( <h3>Loading</h3> ) : (
  <>
    {oneProduct && ( 
    <div>
      <img src={oneProduct.picture} alt="" width="350" height="350" />
      <h3>{oneProduct.name}</h3>
      <h3>{oneProduct.price} USD </h3>
      <p> {oneProduct.description} </p>
    </div>
  )}
  </>
  )}
  </>
  );
};

export default ProductDetails;