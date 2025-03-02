import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(formData.email, formData.password);
    if (result.success) navigate("/my-bookings"); // Redirect after login
    else setError(result.message);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 4, bgcolor: "white", borderRadius: 2 }}>
        <Typography variant="h4" mb={2}>Login</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} required sx={{ mb: 2 }} />
          <TextField fullWidth label="Password" name="password" type="password" onChange={handleChange} required sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
        </form>
      </Box>
    </Container>
  );
}
