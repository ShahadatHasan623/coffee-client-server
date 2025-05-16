import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
     const [user,setUser]=useState(null)
    // signUp 
    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign In 
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubsCribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return()=>{
            unSubsCribe()
        }

    },[])

    const UserInfo ={
        user,
        signUp,
        signInUser
    }
    return (
        <AuthContext value={UserInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;