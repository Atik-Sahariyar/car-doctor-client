import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [ user, setUser]  = useState(null);
    const [ loading, setLoadig] = useState(true);
    

    // create user with email and password
    const createUser = (email, password) => {
        setLoadig(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
     
    // sign in with email and password
    const signIn = (email , password ) =>{
        setLoadig(true);
        return signInWithEmailAndPassword(auth, email, password)
    } 
    // current user chec
    useEffect(() => {
       const unsbscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user ', currentUser);
            setLoadig(false)
        });
        return () => {
            return unsbscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.object
}
export default AuthProvider;