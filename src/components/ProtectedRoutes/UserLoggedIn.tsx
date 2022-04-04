import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const UserLoggedIn = ({ children }: { children: JSX.Element }) => {
	const { user } = useContext(AppContext);
	if (user) {
		return <Navigate to='/dashboard' replace={true} />;
	} else {
		return children;
	}
};

export default UserLoggedIn;
