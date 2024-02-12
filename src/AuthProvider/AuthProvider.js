import React, { createContext, useState } from 'react';

import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  } from "firebase/auth";
import app from '../firebase.config';
export const AuthContext= createContext()
const auth = getAuth(app)
const Provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [name,setname]=useState({name:'aks'})

    const createEmailPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const authInfo={
        name,
        createEmailPassword,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;