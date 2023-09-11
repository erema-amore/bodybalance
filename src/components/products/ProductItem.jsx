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
    
    <Card className={style.card} sx={{  background: '#181818' }}>
      <CardMedia className={style.CardMedia} onClick={() => navigate(`/products/${id}`)}
        sx={{ height: 150 }}
        image={picture}
        title={name}
      />
      <CardContent className={style.cardContent}>
        <Typography className={style.cardContent_txt_1} onClick={() => navigate(`/products/${id}`)} gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography  gutterBottom variant="h6" component="div" className={style.price}>
         {price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className={style.category}>
         {category}
        </Typography>
        <Typography variant="body2"  className={style.description}>
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
