import React, { useState, createContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Quote from './Components/Quote/Quote';
import WishList from './Components/WishList/WishList';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LogInForm from './Components/LogInForm/LogInForm';

export const GlobalContext = createContext(null);

function App() {
	const [gState, setGState] = useState({
		url: 'https://self-care-app-backend.herokuapp.com',
	});

	// const handleLogIn = async (user) => {
	// 	try {
	// 		const loggedIn = await fetch(url + 'auth/login', {
	// 			method: 'post',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify(user),
	// 		});
	// 		const response = await loggedIn.json();
	// 		// if the user logged in successfully...
	// 		if (response.status === 200) {
	// 			const newUser = await response;
	// 			// set current user to newly logged in user
	// 			await setCurrentUser(newUser);
	// 			//get activities of the new user
	// 			// if there was an error with the login...
	// 		} else {
	// 			// if there's some sort of error from the server (e.g. wrong pw, no user found, send an alert and try again)
	// 			alert(`Woops! ${response.error} Please try again`);
	// 			console.log(response);
	// 			// reload the page to clear form and avoid getting a React error
	// 			// document.location.reload();
	// 		}
	// 	} catch (err) {
	// 		alert(`Error: ${err}. Please try again`);
	// 		console.log(err);
	// 		document.location.reload();
	// 	}
	// };

	return (
		<GlobalContext.Provider value={{ gState, setGState }}>
			<div className='App'>
				<header>
					<Nav />
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
