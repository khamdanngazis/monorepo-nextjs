// components/organisms/Navbar.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Use useRouter for navigation
import { AppBar, Toolbar, Box,Typography } from '@mui/material';
import NavbarButton from '../elements/NavbarButton'; // Import NavbarButton molecule


const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('auth_token');
    
    // Redirect to login page
    router.push('/login');
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1976d2' }}> {/* Dark Blue */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: '#ffffff' }}>
          My App
        </Typography>
        <Box>
          <NavbarButton title='Logout' onClick={handleLogout} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
