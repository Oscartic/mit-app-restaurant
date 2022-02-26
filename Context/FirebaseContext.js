import { useState, useEffect, createContext, useMemo } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import axios from 'axios';

export const FirebaseContext = createContext();

const FirebaseProvider = (props) => {

    const [user, setUser] = useState({});
    const [userToken, setUserToken] = useState('');
    const [csrfTokenState, setCsrfTokenState] = useState('');
    const [isFetch, setIsFetch] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const [errorSignUp, setErrorSignUp] = useState('');
    
    
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    });

    useEffect(() => {
        const localUserToken = JSON.parse(localStorage.getItem('userToken')) || [];
        if(localUserToken.length >= 1) {
            setUserToken(localUserToken);
        };
    },[]);

    const setTokenBrowser = (firebaseToken) => { 
        const token = `Bearer ${firebaseToken}`;  
        setUserToken(token);
        return localStorage.setItem('userToken', JSON.stringify(token));
    };
    const setHeaderReq = (token) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            credentials: "include",
            mode: "cors",
        }
    };
    const setCertificate = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5001/api/get_certificate`, {
                headers: {
                    Accept: 'application/json',
                    "Content_Type": "application/json",
                    "XSRF_TOKEN": csrfTokenState,
                },
                credentials: "include",
                mode: "cors"
            });
            

        } catch (error) {
            
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
                setHeaderReq(user.accessToken)
            );
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
            setIsFetch(false);
            return user;
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
            register,
            logIn,
            logout,
        });
    },[user, userToken, isFetch, errorLogin]); 
    return <FirebaseContext.Provider value={value} {...props} />

}

export default FirebaseProvider;