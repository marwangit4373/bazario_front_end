import React, { useState } from 'react';
import { TextField, Button, Avatar, Typography, Container } from '@mui/material';
import { register } from "../../api/api"; // استيراد الـ API

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profileImage: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // console.log("name");
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const { username, email, password, profileImage } = formData;
      const formDataToSend = new FormData();
      formDataToSend.append('username', username);
      formDataToSend.append('email', email);
      formDataToSend.append('password', password);
      if (profileImage) {
        formDataToSend.append('profileImage', profileImage);
      }
      const response = await register(username, email, password, profileImage);
      const { token, user } = response; // التوكن وبيانات المستخدم في الـ response

    // تخزين التوكن وبيانات المستخدم في الـ localStorage
    localStorage.setItem('token', token); // تخزين التوكن
    localStorage.setItem('user', JSON.stringify(user));
      console.log(response);

      // await register(username, email, password, profileImage);
      alert('Registration Successful');
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return renderForm(formData, handleChange, handleRegister, error, loading);
};

const renderForm = (formData, handleChange, handleRegister, error, loading) => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>Register User</Typography>
      <Avatar
        alt="Profile Image"
        src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : ''}
        sx={{ width: 56, height: 56, margin: '0 auto 20px' }}
      />
      <input
        accept="image/*"
        type="file"
        name="profileImage"
        onChange={handleChange}
        style={{ display: 'none' }}
        id="profile-image-upload"
      />
      <label htmlFor="profile-image-upload">
        <Button variant="contained" component="span">Upload Profile Image</Button>
      </label>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        name="username"
        value={formData.username}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        name="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
      />
      {error && <Typography color="error" align="center" margin="normal">{error}</Typography>}
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        fullWidth
        disabled={loading}
        sx={{ marginTop: 2 }}
      >
        {loading ? 'Registering...' : 'Register'}
      </Button>
    </Container>
  );
};

export default RegisterUser;
