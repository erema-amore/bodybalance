import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import style from '../../style/productItem.module.css'
import { deleteProduct } from '../../store/products/productsAction';
import { addProductToCart } from '../../helpers/functions';
import { getCart } from '../../store/cart/cartSlice';


export default function MediaCard({ product }) {
  const { name, description, price, picture, category, id } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia onClick={() => navigate(`/products/${id}`)}
        sx={{ height: 140 }}
        image={picture}
        title={name}
      />
      <CardContent>
        <Typography onClick={() => navigate(`/products/${id}`)} gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions className={style.productItem__btn}>
        <button onClick={() => { addProductToCart(product); dispatch(getCart()) }}>Add to cart</button>
        <button onClick={() => navigate(`/product-edit/${id}`)} >Edit</button>
        <button onClick={() => dispatch(deleteProduct({ id }))} >Delete</button>
      </CardActions>
    </Card>
  );
}
