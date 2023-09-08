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
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
        Dashboard
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
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
<<<<<<< HEAD
          <button onClick={() => { logout(); navigate('/') }} >Logout</button>
          <button onClick={() => {navigate('/myorder') }} >My Orders</button>
=======
          <button className={style.nav_logout_btn} onClick={() => { logout(); navigate('/') }} >Logout</button>
>>>>>>> 9d09de7cf4af4bda7dba41a8908aa80161101d3d
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
          <h3>Cart</h3> 
          <h3>{ countProductsInCart }</h3>
          </>
        </div>
          </div>

        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}