import React, { createContext, useEffect, useState } from 'react';

import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,  } from "firebase/auth";
import app from '../firebase.config';
export const AuthContext= createContext()
const auth = getAuth(app)
const Provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [name,setname]=useState({name:'aks'})
    const [user,setuser]=useState('')
    //  singup
    const createEmailPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // updatename

     const updataData=(profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

     
    //  logIn
      const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

      }

      const logOut=()=>{
        return signOut(auth)
      }

      

      useEffect(()=>{
        const unSubcriber =onAuthStateChanged(auth,(curentuser)=>{
            setuser(curentuser)

        })

        return ()=> unSubcriber

      },[])

    const authInfo={
        name,
        createEmailPassword,
        logIn,
        logOut,
        user,
        updataData

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;