import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar: React.FC = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>ServerFlow</Navbar.Brand>
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
						<LinkContainer to='/login'>
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
