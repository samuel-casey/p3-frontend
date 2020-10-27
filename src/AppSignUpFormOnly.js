// import React, { useState } from 'react';
// import './App.scss';
// import Nav from './Components/Nav/Nav';
// import SignUpForm from './Components/SignUpForm/SignUpForm';

// function AppSignUpFormOnly() {
// 	const url = 'http://localhost:2008/';

// 	const emptyUser = {
// 		email: '',
// 		password: '',
// 		confirmPassword: '',
// 	};

// 	const [currentUser, setCurrentUser] = useState(emptyUser);

// 	const handleLogIn = async (user) => {
// 		try {
// 			const loggedIn = await fetch(url + 'auth/login', {
// 				method: 'post',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(user),
// 			});
// 			const response = await loggedIn.json();
// 			// if the user logged in successfully...
// 			if (response.status === 200) {
// 				const newUser = await response;
// 				console.log('currentUser: ', newUser);
// 				// set current user to newly logged in user
// 				await setCurrentUser(newUser);
// 				//get activities of the new user
// 				console.log(newUser);
// 				// if there was an error with the login...
// 			} else {
// 				// if there's some sort of error from the server (e.g. wrong pw, no user found, send an alert and try again)
// 				alert(`Woops! ${response.error} Please try again`);
// 				// reload the page to clear form and avoid getting a React error
// 				document.location.reload();
// 			}
// 		} catch (err) {
// 			alert(`Error: ${err}. Please try again`);
// 			document.location.reload();
// 		}
// 	};

// 	const handleSignUp = async (newUser) => {
// 		try {
// 			/// CHANGE  BELOW TO USE OUR API
// 			const user = await fetch(url + 'auth/signup', {
// 				method: 'post',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(newUser),
// 			});
// 			const response = await user.json();
// 			if (response.status === 200) {
// 				const data = await response.data;
// 				// if log in successful, log in the new user
// 				await handleLogIn(newUser);
// 				// clear sign up form
// 				// setSignUpFormUser(emptyUser);
// 			} else {
// 				// log error if error & refresh
// 				if (response.error.code === 11000) {
// 					alert(
// 						'An account already exists for that email. Please proceed to log in.'
// 					);
// 				} else {
// 					alert(response.message);
// 				}
// 				document.location.reload();
// 			}
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	return (
// 		<div className='App'>
// 			<SignUpForm emptyUser={emptyUser} handleSignUp={handleSignUp} />
// 		</div>
// 	);
// }

// export default AppSignUpFormOnly;
