import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
	return (
		<div
			style={{
				height: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Spinner animation='border' variant='primary' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		</div>
	);
};

export default LoadingSpinner;
