import React, { useState, createContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Quote from './Components/Quote/Quote';
import WishList from './Components/WishList/WishList';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LogInForm from './Components/LogInForm/LogInForm';
import TestNav from './Components/TestNav/TestNav';

export const GlobalContext = createContext(null);

function App() {
	const [gState, setGState] = useState({
		url: 'https://self-care-app-backend.herokuapp.com',
		token: null,
		email: null,
	});

	useEffect(() => {
		const token = JSON.parse(window.localStorage.getItem('token'));
		const email = JSON.parse(window.localStorage.getItem('email'));
		if (token && email) {
			setGState({ ...gState, token: token, email: email });
		}
	}, []);

	return (
		<GlobalContext.Provider value={{ gState, setGState }}>
			<div className='App'>
				<header>
					<Nav />
					<TestNav />
				</header>
				<Switch>
					<main>
						<Route exact path='/'>
							<h1>Name of App</h1>
							<h2>Resources to pass the time & to take care of your mind</h2>
							<Quote />
						</Route>
						<Route path='/wishlist'>
							<Quote />
							<WishList />
						</Route>
						<Route path='/signup' render={(rp) => <SignUpForm {...rp} />} />
						<Route path='/login' render={(rp) => <LogInForm {...rp} />} />
					</main>
				</Switch>
				<footer>FOOTER</footer>
			</div>
		</GlobalContext.Provider>
	);
}

export default App;
