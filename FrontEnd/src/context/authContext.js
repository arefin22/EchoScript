"use client"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { auth, googleProvider } from "@/firebase";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [ loader, setLoader] =useState(true);
  
 
    const googleLogIn =  () => {
        try {
          setLoader(true);
         return signInWithPopup(auth,googleProvider);
         
        } catch (error) {
          console.error('Google sign-in error:', error.message);
        }
      };
  
      const createUser =  (email, password) => {
        try {
          setLoader(true);
          return createUserWithEmailAndPassword(auth,email, password);
        
        } catch (error) {
          console.error('Email/password sign-up error:', error.message);
        }
      };
      
  
      const logIn =  (email, password) => {
        try {
          setLoader(true);
         return signInWithEmailAndPassword(auth,email, password);
          
        } catch (error) {
          console.error('Email/password login error:', error.message);
        }
      };
      
      const handleUpdateProfile =  (name, photo) => {
        try {
          
         return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
         
        } catch (error) {
          console.error('Profile update error:', error.message);
        }
      };
      
      
  
      const logout =  () => {
        try {
          setLoader(true);
          setUser(null);
         return  signOut(auth);
        } catch (error) {
          console.error('Logout error:', error.message);
        }
      };
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(User) => {
          setUser(User);
          setLoader(false);
        });
    
        return () => unsubscribe();
      }, []);
      
  
    const value = {
      user,
      googleLogIn,
      createUser,
      logIn,
      logout,loader,handleUpdateProfile
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };
