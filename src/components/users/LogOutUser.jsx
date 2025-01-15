import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LogOutUser = () => {
  const navigate = useNavigate();  

  const handleLogout = () => {
    localStorage.clear();
    
    navigate('/logout');  
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogOutUser;
