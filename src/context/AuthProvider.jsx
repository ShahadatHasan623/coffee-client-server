import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

    // signUp 
    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign In 
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const UserInfo ={
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