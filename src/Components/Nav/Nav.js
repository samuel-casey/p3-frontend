import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { GlobalContext } from '../../App';
import './Nav.scss';

export default function TestNav() {
	const { gState, setGState } = useContext(GlobalContext);

	let loggedInNav = (
		<nav>
			<h6>Hello {gState.email}</h6>
			<Link className='Links' to='/'>
				<h4>Home</h4>
			</Link>
			<Link className='Links' to='/favquotes'>
				<h4>Quotes</h4>
			</Link>
			<Link className='Links' to='/wishlist'>
				<h4>Wish List</h4>
			</Link>
			<Link className='Links' to='/completedlist'>
				<h4>Completed List</h4>
			</Link>
			<div id='hamburger'>
				<h3>☰</h3>
			</div>
			<LogOutBtn />
		</nav>
	);

	let loggedOutNav = (
		<nav>
			<h4>Hello Welcome to our App</h4>
			<Link classname='Links' to='/signup'>
				<h6>Click here to sign up or login</h6>
			</Link>
			<Link className='Links' to='/'>
				<h6>Home</h6>
			</Link>
			<Link className='Links' to='/favquotes'>
				<h6>Quotes</h6>
			</Link>
			<Link className='Links' to='/wishlist'>
				<h6>Wish List</h6>
			</Link>
			<Link className='Links' to='/completedlist'>
				<h6>Completed List</h6>
			</Link>
			<div id='hamburger'>
				<h3>☰</h3>
			</div>
		</nav>
	);

	return gState.token ? loggedInNav : loggedOutNav;
}
