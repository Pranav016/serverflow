import React, { useContext, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../Login/Login.css';

const ForgotPassword: React.FC = () => {
	const { user, resetPassword } = useContext(AppContext);
	const emailRef = useRef<HTMLInputElement>(null);
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const email = emailRef?.current?.value;
		try {
			if (email === '' || email === undefined) {
				toast.error('Please enter an Email!');
				return;
			}
			await resetPassword(email);
			toast.success(
				'Email sent successfully! Please check your mailbox..'
			);
		} catch (err) {
			toast.error((err as Error).message);
		}
	};
	return (
		<div className='authForm'>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						ref={emailRef}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Send Reset Password Mail
				</Button>
			</Form>
			<hr />
			{!user && <Link to='/login'>Login</Link>}
		</div>
	);
};

export default ForgotPassword;
