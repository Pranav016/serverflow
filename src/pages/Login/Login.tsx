import React, { useContext, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import GoogleButton from 'react-google-button';
import './Login.css';

const Login: React.FC = () => {
	const { login, googleSignIn } = useContext(AppContext);
	const navigate = useNavigate();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const email = emailRef?.current?.value;
		const password = passwordRef?.current?.value;
		try {
			if (email === '' || email === undefined) {
				toast.error('Please enter an Email!');
				return;
			}
			if (password === '' || password === undefined) {
				toast.error('Please enter your Password!');
				return;
			}
			await login(email, password);
			navigate('/dashboard', { replace: true });
		} catch (err) {
			toast.error((err as Error).message);
		}
	};
	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn();
			navigate('/dashboard', { replace: true });
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
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
			<p>OR</p>
			<GoogleButton onClick={handleGoogleSignIn} />
			<hr />
			<Link to='/reset-password'>Forgot Password</Link>
			<Link to='/signup'>New user?</Link>
		</div>
	);
};

export default Login;
