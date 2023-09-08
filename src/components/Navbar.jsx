import React, { useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import style from '../style/navbar.module.css'
import { useNavigate } from 'react-router-dom';
import { logout, checkUserLogin} from '../helpers/functions';
import { getProducts } from '../store/products/productsAction'
import { useDispatch, useSelector } from 'react-redux';
import { updateToken, getCategories } from '../helpers/functions';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { changeCategory } from '../store/products/productsSlice'
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { countProductsInCart } = useSelector(state => state.cart);
  const [categories, setCategories] = useState([]);

  const getCategoriesData = async () => {
    let categories = await getCategories();
    setCategories(categories);
  };

  useEffect(() => {
    updateToken();
    getCategoriesData();
    dispatch(getProducts());
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <div className={style.nav_main}>
        <div className={style.nav_logo}>
            <h3>Logo</h3>
          </div>

          

          <div onClick={() => navigate("/")} className={style.nav_home_page}>

            <h3>Home</h3>
          </div>
          <div onClick={() => navigate("/products")} className={style.nav_gym_service}>
            <h3>Services & Shop</h3>
          </div>
          <div>
          <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Products Type
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => {  dispatch(changeCategory({ category: '' }));dispatch(getProducts()) }}>All</MenuItem>
        <MenuItem >
        {categories.map((category, index) => (
          <MenuItem  key={index} onClick={() => {dispatch(changeCategory({ category })); dispatch(getProducts());
          }}>
          {category}
          </MenuItem>
        ))}
        </MenuItem>
        
      </Menu>
    </div>
          </div>
          <div className={style.nav_search}>
            <input placeholder='Search' />
            <button className={style.nav_search_btn}>Search</button>
          </div>
        <div>
        {checkUserLogin() ? (
          <div className={style.nav_logout}>
          <button onClick={() => { logout(); navigate('/') }} >Logout</button>
          <button onClick={() => {navigate('/myorder') }} >My Orders</button>
        </div>
        ) : (
          <>
           <div className={style.nav_login}>
            <button className={style.nav_login_btn} onClick={() => navigate('login')} >Login</button>
            </div>
          <div className={style.nav_registration}>
            <button className={style.nav_registration_btn} onClick={() => navigate('/register')} >Registration</button>
            </div>
        </>
          )}
        </div>
        <div onClick={() => { navigate('/cart')  }} >
          <>
          <div className={style.cart_block}>
          <h3>Cart</h3> 
          <h3>{ countProductsInCart }</h3>
          </div>
          </>
        </div>
          </div>

        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}