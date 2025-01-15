import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

// return (<div>d</div>)

  const auth = localStorage.getItem('user');
  const user = auth ? JSON.parse(auth) : null;
  const role = user?.userRole;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {

    setAnchorEl(null);
  };
  console.log(anchorEl)

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </Typography>
        {role === 'user' && (
          <>
            <Button color="inherit" component={Link} to="/user-profile">Profile</Button>
            <Button color="inherit" component={Link} to="/user-orders">My Orders</Button>
          </>
        )}
        {role === 'admin' && (
          <>
            <Button color="inherit" component={Link} to="/admin-dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/manage-users">Manage Users</Button>
          </>
        )}
        {auth ? (
          <Button color="inherit" onClick={logout}>Logout</Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/register">Signup</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </>
        )}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          // sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
          {role === 'user' && (
            <>
              <MenuItem onClick={handleMenuClose} component={Link} to="/user-profile">Profile</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/user-orders">My Orders</MenuItem>
            </>
          )}
          {role === 'admin' && (
            <>
              <MenuItem onClick={handleMenuClose} component={Link} to="/admin-dashboard">Dashboard</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/manage-users">Manage Users</MenuItem>
            </>
          )}
          {auth ? (
            <MenuItem onClick={() => { handleMenuClose(); logout(); }}>Logout</MenuItem>
          ) : (
            <>
              <MenuItem onClick={handleMenuClose} component={Link} to="/register">Signup</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>

    );
};

export default Nav;
