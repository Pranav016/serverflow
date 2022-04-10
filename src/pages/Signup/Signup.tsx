import React, { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import '../Login/Login.css';

const Signup = () => {
	const { signup } = useContext(AppContext);
	const navigate = useNavigate();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const email = emailRef?.current?.value;
		const password = passwordRef?.current?.value;
		const confirmPassword = confirmPasswordRef?.current?.value;

		if (email === '' || email === undefined) {
			toast.error('Please enter an Email!');
			return;
		}
		if (password === '' || password === undefined) {
			toast.error('Please enter your Password!');
			return;
		}
		if (confirmPassword === '' || confirmPassword === undefined) {
			toast.error('Please enter your Password!');
			return;
		}
		if (password !== confirmPassword) {
			toast.error('Passwords do not match! Try again');
			return;
		}
		try {
			await signup(email, password);
			navigate('/dashboard', { replace: true });
		} catch (err) {
			toast.error((err as Error).message);
		}
	}
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
					<Form.Text className='text-muted'>
						We&apos;ll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						ref={passwordRef}
					/>
				</Form.Group>
				<Form.Group
					className='mb-3'
					controlId='formBasicConfirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Confirm Password'
						ref={confirmPasswordRef}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
			<hr />
			<Link to='/login'>Already have an account?</Link>
		</div>
	);
};

export default Signup;
