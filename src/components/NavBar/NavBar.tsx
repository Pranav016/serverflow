import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './NavBar.css';

const NavBar: React.FC = () => {
	const { user, logout } = useContext(AppContext);
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await logout();
			navigate('/', { replace: true });
		} catch (err) {
			toast.error((err as Error).message);
		}
	};
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='https://serverflow.netlify.app/'>
					<img src='https://i.ibb.co/WWhWg4q/logo.png' alt='logo' />
					ServerFlow
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse
					id='responsive-navbar-nav'
					className='justify-content-end'>
					<Nav>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/questions'>
							<Nav.Link>Questions</Nav.Link>
						</LinkContainer>
						{!user && (
							<LinkContainer to='/login'>
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
						)}
						{!user && (
							<LinkContainer to='/signup'>
								<Nav.Link>Signup</Nav.Link>
							</LinkContainer>
						)}
						{user && (
							<LinkContainer to='/dashboard'>
								<Nav.Link>Dashboard</Nav.Link>
							</LinkContainer>
						)}
						{user && <Button onClick={handleLogout}>Logout</Button>}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
