import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

    // signUp 
    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const UserInfo ={
        signUp
    }
    return (
        <AuthContext value={UserInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;