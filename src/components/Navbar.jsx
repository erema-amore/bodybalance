import React, { useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import style from '../style/navbar.module.css'
import { useNavigate } from 'react-router-dom';
import { logout, checkUserLogin } from '../helpers/functions';
import { getProducts } from '../store/products/productsAction'
import { useDispatch, useSelector } from 'react-redux';
import { updateToken } from '../helpers/functions';

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

  useEffect(() => {
    updateToken();
    dispatch(getProducts());
  }, []);

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
          <div className={style.nav_search}>
            <input placeholder='Search' />
            <button className={style.nav_search_btn}>Search</button>
          </div>

        <div>
        {checkUserLogin() ? (
          <div className={style.nav_logout}>
          <button className={style.nav_logout_btn} onClick={() => { logout(); navigate('/') }} >Logout</button>
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