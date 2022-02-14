import { useState, useEffect, createContext, useMemo } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const FirebaseContext = createContext();

const FirebaseProvider = (props) => {

    const [user, setUser] = useState({});
    
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    });
    

    const register = async (name, nickname, email, password) => {
        try {
            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            
            // await updateProfile(auth, {
            //     name,
            //     nickname
            // })
        } catch (error) {
            console.log("[FirebaseProvider.register] >>> ", error.message);
        }
        
    };

    const logIn = async (email, password) => {
        try {
            const sessionUser = await signInWithEmailAndPassword(auth, email, password);
            console.log(sessionUser.user);
        } catch (error) {
            console.log("[FirebaseProvider.logIn] >>> ", error.message);
        }
    };

    const logout = async () =>  {
        try {
            await signOut(auth);
        } catch (error) {
            console.log("[FirebaseProvider.logout] >>> ", error.message);
        }
    }

    const value = useMemo(() => {
        return ({
            user,
            register,
            logIn,
            logout
        });
    },[user]); 
    return <FirebaseContext.Provider value={value} {...props} />

}

export default FirebaseProvider;