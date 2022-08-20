import React from 'react';
import {useAuth} from './../contexts/AuthContext';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {
	const {user} = useAuth();
    
	if(user){
		return children;
	} else {
		return <Navigate replace to="/login" />;
	}
}
 
export default PrivateRoute;