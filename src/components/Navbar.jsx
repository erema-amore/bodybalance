import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import style from '../style/navbar.module.css'

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <div className={style.nav_main}>
        <div className={style.nav_logo}>
            <h3>Logo</h3>
          </div>
          <div className={style.nav_home_page}>
            <h3>HomePage</h3>
          </div>
          <div className={style.nav_gym_service}>
            <h3>Gym Service</h3>
          </div>
          <div className={style.nav_healthy_shop}>
            <h3>Healthy Shop</h3>
          </div>
          <div className={style.nav_search}>
            <input placeholder='Search' />
            <button>Search</button>
          </div>
          <div className={style.nav_login}>
            <button>Login</button>
          </div>
          <div className={style.nav_registration}>
            <button>Registration</button>
          </div>
          </div>

        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}