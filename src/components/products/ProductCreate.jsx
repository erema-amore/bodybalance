import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../store/products/productsAction";


const ProductCreate = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    picture: "",
    price: "",
    category: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div >
      <div >
        <h3>Create Card</h3>
        <input type="text" placeholder="Name"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input type="text" placeholder="Description"
          onChange={(e) => setProduct({ ...product, description: e.target.value }) }
        />
        <input type="url" placeholder="Picture"
          onChange={(e) => setProduct({ ...product, pisture: e.target.value })}
        />
        <input type="number" placeholder="Price"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input type="text" placeholder="Category"
          onChange={(e) => setProduct({ ...product, category: e.target.value.toLowerCase() }) }
        />
        <button onClick={() => { dispatch(createProduct(product)); navigate("/products"); }} >
          Create
        </button>
      </div>
    </div>
  );
};

export default ProductCreate;