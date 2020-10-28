import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../App';
import './LogInForm.scss';

export default function LogInForm(props) {
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;

	const emptyForm = {
		email: '',
		password: '',
	};

	const [formData, setFormData] = useState(emptyForm);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = formData;
		const user = { email, password };
		try {
			const loggedIn = await fetch(url + '/auth/login', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			});
			const response = await loggedIn.json();
			if (response.error) {
				alert(
					`An error occurred while attempting to log you in. Please try again \n${response.error}`
				);
				setFormData(emptyForm);
			} else {
				window.localStorage.setItem('token', JSON.stringify(response.token));
				window.localStorage.setItem('email', JSON.stringify(response.email));
				setGState({ ...gState, token: response.token, email: response.email });
				setFormData(emptyForm);
				props.history.push('/wishlist');
			}
		} catch (err) {
			alert(`Error: ${err}. Please try again`);
			console.log(err);
			document.location.reload();
		}
	};

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	return (
		<div className='log-in-page'>
			<h2>Log in</h2>
			<form onSubmit={handleSubmit} className='log-in-form'>
				<input
					type='email'
					name='email'
					placeholder='email'
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					value={formData.password}
					onChange={handleChange}
				/>
				<input type='submit' className='form-btn' />
			</form>
		</div>
	);
}

///// REMOVED FROM LINE AFTER props.history.push('/wishlist') bc I think we handle this error on the backend
// if (response.status === 200) {
// 	const newUser = await response;
// 	// set current user to newly logged in user
// 	await setCurrentUser(newUser);
// 	//get activities of the new user
// 	// if there was an error with the login...
// } else {
// 	// if there's some sort of error from the server (e.g. wrong pw, no user found, send an alert and try again)
// 	alert(`Woops! ${response.error} Please try again`);
// 	console.log(response);
// 	// reload the page to clear form and avoid getting a React error
// 	// document.location.reload();
// }
