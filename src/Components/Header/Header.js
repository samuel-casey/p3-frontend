import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { GlobalContext } from '../../App';
import './Header.scss';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Header(props) {
	const { gState, setGState } = useContext(GlobalContext);

	let emailOrDemo;

	if (gState.email && gState.email.startsWith('demo')) {
		emailOrDemo = 'demo';
	} else {
		emailOrDemo = gState.email;
	}

	const loggedIn = (
		<>
			<Navbar expand='md'>
				<Navbar.Brand href='/'>
					<div id='nav-logo'>
						<i class='fas fa-pause-circle'></i> pause.app
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' id='hamburger' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link>
							<LogOutBtn />
						</Nav.Link>
						<Nav.Link href='/signup'>Sign up/Log in</Nav.Link>
						<Nav.Link href='/wishlist'>Wishlist</Nav.Link>
						<Nav.Link href='/likeditems'>Likes</Nav.Link>
						<Nav.Link href='/completedlist'>Completed</Nav.Link>
						<Nav.Link href='/favquotes'>Quotes</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<p className='welcome-msg'>
				Welcome{' '}
				{emailOrDemo === 'demo'
					? `to the ${emailOrDemo}!`
					: `back ${emailOrDemo}!`}
			</p>
		</>
	);

	const loggedOut = (
		<>
			<Navbar expand='md'>
				<Navbar.Brand href='/'>
					<div id='nav-logo'>
						<i class='fas fa-pause-circle'></i> pause.app
					</div>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className='navbar-dark'
					id='hamburger'
				/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<br></br>
						<Nav.Link>
							<button
								onClick={() => {
									props.handleDemoUserClick();
									props.history.push('/wishlist');
								}}
								className='nav-btn'>
								Demo
							</button>
						</Nav.Link>
						<Nav.Link href='/signup'>Sign up/Log in</Nav.Link>
						<Nav.Link href='/wishlist'>Wishlist</Nav.Link>
						<Nav.Link href='/likeditems'>Likes</Nav.Link>
						<Nav.Link href='/completedlist'>Completed</Nav.Link>
						<Nav.Link id='quotes-link' href='/favquotes'>
							Quotes
						</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
					</Nav>
					<p className='welcome-msg'>
						Welcome <span className='logged-in-email'>pause.app</span>! Sign up,
						sign in, or try a demo for help making time for self-care.
					</p>
				</Navbar.Collapse>
			</Navbar>
		</>
	);

	return gState.token ? loggedIn : loggedOut;
}
