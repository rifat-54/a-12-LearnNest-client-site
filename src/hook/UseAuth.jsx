import React, { useContext } from 'react';
import { AuthContex } from '../authProvider/AuthProvider';

const UseAuth = () => {
    const auth=useContext(AuthContex)
    return auth;
};

export default UseAuth;