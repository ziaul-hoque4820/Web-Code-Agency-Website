import { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
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

    const authValue  = {user, signupWithEmail}
    return (
        <AuthContext.Provider value={authValue }>
            {!loading && children}
        </AuthContext.Provider>
    )
}
export default AuthProvider