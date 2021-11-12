import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link style={{textDecoration: 'none' , color: 'whitesmoke'}} to="appointment" > <Button color="inherit">Appointment</Button> </Link>
          {
            user?.email ? 
            <Box> 
              <Button onClick={logOut} color="inherit">LogOut</Button>

              <NavLink style={{textDecoration: 'none' , color: 'whitesmoke'}} to="dashboard" >  <Button color="inherit">Dashboard</Button> </NavLink>

            <small style={{fontWeight: '600' , color: 'darkYellow'}}>   user : {user?.displayName}  </small>
              

            </Box>

            
            :
            <NavLink style={{textDecoration: 'none' , color: 'whitesmoke'}} to="login" >  <Button color="inherit">Login</Button> </NavLink>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;