'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
//import UpdateButton from '@/components/UpdateButton';
import Navbar from '../components/layouts/Navbar'
import MainLayout from '../components/layouts/MainLayout'

const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('auth_token'); // Example: check localStorage for login token
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      router.push('/login');
    }
  }, [router]);


  return (
    <div>
      <Navbar /> {/* Display the navbar */}
      <MainLayout  />
    </div>
  );
};

export default MainPage;
