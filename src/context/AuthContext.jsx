import { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config.js';

const AuthContext = createContext();



export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const auth = getAuth(app);

    // sign up new user using email and password
    const signupWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login existing user using email and password
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authValue  = {user, signupWithEmail, loginWithEmail}
    return (
        <AuthContext.Provider value={authValue }>
            {!loading && children}
        </AuthContext.Provider>
    )
}
export default AuthProvider