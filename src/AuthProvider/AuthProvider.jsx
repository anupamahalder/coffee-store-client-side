import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
// create context 
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // declare a state for user 
    const [user, setUser] = useState(null);

    //create user with email and password
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const UserInfo ={
        user,
        createUser,
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