import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const UserLoginRequired = ({ children }: { children: JSX.Element }) => {
	const { user } = useContext(AppContext);
	if (!user) {
		return <Navigate to='/login' replace={true} />;
	}
	return children;
};

export default UserLoginRequired;
