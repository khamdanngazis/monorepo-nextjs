'use client';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../apis/firebaseConfig';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FirebaseError } from 'firebase/app';

const LoginLayout = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Get the token after login
      const token = await user.getIdToken();

      // Save the token to localStorage
      localStorage.setItem('auth_token', token);

      // Redirect to the home page
      router.push('/');
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {  // <-- Type guard for FirebaseError
        setError(err.message);  // Accessing message safely
      } else if (err instanceof Error) {  // <-- Generic Error type fallback
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      padding={3}
      maxWidth={400}
      margin="auto"
      mt={5}
      boxShadow={3}
    >
      <Typography variant="h5" mb={2}>Login</Typography>
      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        disabled={loading}
        fullWidth
        sx={{ mt: 2 }}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Box>
  );
};

export default LoginLayout;
