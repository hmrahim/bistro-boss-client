import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../../firebase.init';
export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)

    const createuser = (email,password)=> {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=> {
        return signInWithEmailAndPassword(auth,email,password)

    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }
    const logOut = ()=> {
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth,(createuser)=>{
            setUser(createuser)
            setLoading(false)

        })
        return ()=> {
            unSubscribe()
        }

    },[])

    const authInfo = {createuser,signInUser,user,resetPassword,logOut}
    return (
        <authContext.Provider value={authInfo}>

            {children}
            
        </authContext.Provider>
    );
};

export default AuthProvider;