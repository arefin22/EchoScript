"use client"
import { useAuth } from '@/context/authContext';
import { useRouter } from "next/navigation";
import React, { useEffect } from 'react';


const PrivateRoute = ({children}) => {
    const router = useRouter();
  const { user, loader } = useAuth();
  useEffect(() => {
    if (!loader && !user) {
      router.replace('/login'); // Redirect to login page if user is not logged in
    }
  }, [user, loader, router]);

  return !loader && user ? <>{children}</> : null;
};


export default PrivateRoute;