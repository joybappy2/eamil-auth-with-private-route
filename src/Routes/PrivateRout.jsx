import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRout = ({children}) => {

    const location = useLocation()

    const {user, loading} = use(AuthContext)

    if(loading){
        return <p className='text-5xl animate-spin flex justify-center items-center mt-[250px]'>❌</p>
    }

    if(user){
        return children
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRout;