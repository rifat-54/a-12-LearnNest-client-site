import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.init';
import UseAxiosPublic from '../hook/UseAxiosPublic';


export const AuthContex=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const googleProvider=new GoogleAuthProvider()
    const[user,setUser]=useState();
    const [loading,setLoading]=useState(true);
    const axiosPublic=UseAxiosPublic()


    const googleLogin=()=>{
        setLoading(true);
      return  signInWithPopup(auth,googleProvider)
    }
    
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    const logoutUser=()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,async(currentUser)=>{
            setUser(currentUser);
            // console.log('currentUser--> ',currentUser);
            if(currentUser?.email){
                const userInfo={email:currentUser?.email}
                try {
                    const{data}=await axiosPublic.post('/jwt',userInfo)
                    
                    if(data?.token){
                        localStorage.setItem('access-token',data?.token)
                    }
                    setLoading(false)
                } catch (error) {
                    // console.log(error);
                }
            }else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[axiosPublic])


    const authInfo={
        googleLogin,
        createUser,
        loginUser,
        updateUser,
        logoutUser,
        user,
        loading,
        setLoading

    }


    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;