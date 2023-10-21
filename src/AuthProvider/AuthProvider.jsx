import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
// create context 
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // declare a state for user 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user with email and password
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in with email and password 
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const UserInfo ={
        user,
        createUser,
        signInUser,
    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// Adding proptypes 
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;