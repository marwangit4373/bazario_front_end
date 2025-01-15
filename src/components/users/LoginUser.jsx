import { TextField, Button, Typography, Container } from "@mui/material";
import { useState } from "react";
import { login } from "../../api/api";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
    const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { username, email, password } = formData;
      const formDataToSend = new FormData();
      formDataToSend.append('username', username);
      formDataToSend.append('email', email);
      formDataToSend.append('password', password);

      // فرضًا أن الـ API يعيد هذا الـ response عند تسجيل الدخول الناجح
      const response = await login(username, email, password);
      const { token, user } = response; // التوكن وبيانات المستخدم في الـ response

      // تخزين التوكن وبيانات المستخدم في الـ localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // توجيه المستخدم أو إضافة إجراءات أخرى
      alert('Login Successful');
      navigate('/');

      
    } catch (err) {
      setError('Login Failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return renderForm(formData, handleChange, handleLogin, error, loading);
};

const renderForm = (formData, handleChange, handleLogin, error, loading) => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>Login User</Typography>

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
        onClick={handleLogin}
        fullWidth
        disabled={loading}
        sx={{ marginTop: 2 }}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Container>
  );
};

export default LoginUser;
