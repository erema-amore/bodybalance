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
import { changeCategory, changeSearchVal } from '../store/products/productsSlice'
import { useState } from 'react';
import logo from '../img/navBar/logo.png'

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
  const [search, setSearch] = useState('');

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
          <div className={style.nav_main_list}>
        <div onClick={() => navigate("/")} className={style.nav_logo}>
            < img src={ logo } alt="logo" className={style.nav_logo_btn}/>
          </div>

          

          <div onClick={() => navigate("/")} className={style.nav_home_page}>
            <button className={style.nav_home_btn}>Home</button>
          </div>
          <div onClick={() => navigate("/products")} className={style.nav_gym_service}>
            <button className={style.nav_services_btn}>Services & Shop</button>
          </div>
          <div>
          <div>
      <button className={style.nav_dashboard_btn}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Products Type
      </button>
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
          </div>
          <div className={style.nav_search}>
          <form onSubmit={(e) => {
              e.preventDefault();
              dispatch(changeSearchVal({ search }));
              dispatch(getProducts());
            }}>
              <input className={style.nav_search_input} type="text" onChange={(e) => setSearch(e.target.value)}/>
              <button className={style.nav_search_btn} type="submit">Search</button>
            </form>
        
          </div>
        <div>
        {checkUserLogin() ? (
          <div className={style.nav_logout}>
          <button className={style.nav_logout_btn} onClick={() => { logout(); navigate('/') }} >Logout</button>
          <button className={style.nav_myOrder_btn} onClick={() => {navigate('/myorder') }} >My Orders</button>
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