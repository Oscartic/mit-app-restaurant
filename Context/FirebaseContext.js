import { useState, useEffect, createContext, useMemo } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import axios from 'axios';

export const FirebaseContext = createContext();

const FirebaseProvider = (props) => {

    const [user, setUser] = useState({});
    const [userToken, setUserToken] = useState('');
    const [inSession, setInSession] = useState(false);
    const [isFetch, setIsFetch] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const [errorSignUp, setErrorSignUp] = useState('');
    
    
    useEffect(() => {
        const localUserToken = JSON.parse(localStorage.getItem('userToken'));
        if(localUserToken && localUserToken.length >= 1) {
            setUserToken(localUserToken);
            setInSession(true);
        };
    },[inSession,userToken]);
    
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    });

    const setTokenBrowser = (firebaseToken) => { 
        const token = `Bearer ${firebaseToken}`;  
        setUserToken(token);
        return localStorage.setItem('userToken', JSON.stringify(token));
    };
    const setHeaderReq = (token) => {
        return {
            headers: {
                Authorization: `${token}`,
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            credentials: "include",
            mode: "cors",
        }
    };

    const register = async ({nickname, email, password}) => {
        try {
            setIsFetch(true);
            setErrorSignUp('');
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {displayName: nickname});
            const idToken = await user.getIdToken();
            setTokenBrowser(idToken, setUserToken);  
            const respond = await axios.post(
                `${process.env.API_MIT_RESTAURANT_URL}/users/${user.uid}`,
                {message: 'I send you the firebase ID, do your thing!'},
                setHeaderReq(userToken)
            );
            setInSession(true);
            setIsFetch(false);
            console.log('[FirebaseProvider.register] The user has been created! 👌');
            return respond;
        } catch (error) {
            console.log("[FirebaseProvider.register] >>> ", error.message);
            setErrorSignUp(error.message);
            setIsFetch(false);
        }
        
    };

    const logIn = async (email, password) => {
        try {
            setIsFetch(true);
            setErrorLogin('');
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await user.getIdToken();
            setTokenBrowser(idToken, setUserToken);
            setInSession(true);
            const { data } = await axios.get(
                `${process.env.API_MIT_RESTAURANT_URL}/users/${user.uid}`,
                setHeaderReq(userToken)
            );
            setIsFetch(false);
            return data;
        } catch (error) {
            console.log("[FirebaseProvider.logIn] >>> ", error.message);
            setErrorLogin(error.message);
            setIsFetch(false);
        }
    };

    const logout = async () =>  {
        try {
            await signOut(auth);
            setUserToken('');
            setInSession(false);
            localStorage.removeItem('userToken');
        } catch (error) {
            console.log("[FirebaseProvider.logout] >>> ", error.message);
        }
    }

    const value = useMemo(() => {
        return ({
            user,
            userToken,
            isFetch,
            errorLogin,
            errorSignUp,
            inSession,
            register,
            logIn,
            logout,
            setHeaderReq
        });
    },[user, userToken, isFetch, errorLogin, errorSignUp, inSession]); 
    return <FirebaseContext.Provider value={value} {...props} />
};

export default FirebaseProvider;