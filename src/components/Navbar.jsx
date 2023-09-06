import React, { useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import style from '../style/navbar.module.css'
import { useNavigate } from 'react-router-dom';
import { logout, checkUserLogin } from '../helpers/functions';
import { getProducts } from '../store/products/productsAction'
import { useDispatch } from 'react-redux';
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
            <h3>HomePage</h3>
          </div>
          <div onClick={() => navigate("/products")} className={style.nav_gym_service}>
            <h3>Services & Shop</h3>
          </div>
          <div className={style.nav_search}>
            <input placeholder='Search' />
            <button>Search</button>
          </div>

        <div>
        {checkUserLogin() ? (
          <div className={style.nav_logout}>
          <button onClick={() => { logout(); navigate('/') }} >Logout</button>
        </div>
        ) : (
          <>
           <div className={style.nav_login}>
            <button onClick={() => navigate('login')} >Login</button>
            </div>
          <div className={style.nav_registration}>
            <button onClick={() => navigate('/register')} >Registration</button>
            </div>
        </>
          )}
        </div>
          </div>

        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}