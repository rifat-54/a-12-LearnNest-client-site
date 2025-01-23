import React, { createContext } from 'react';


export const AuthContex=createContext(null)

const AuthProvider = ({children}) => {




    const authInfo={

    }

    
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;