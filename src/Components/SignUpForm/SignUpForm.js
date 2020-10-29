import React, { useState, useContext } from 'react';
import './SignUpForm.scss';
import { GlobalContext } from '../../App';
import { Link } from 'react-router-dom';

export default function SignUpForm(props) {
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;

	const emptyForm = {
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formData, setFormData] = useState(emptyForm);
	const [attempted, setAttempted] = useState(0);
	const [errorMsg, setErrorMsg] = useState('');

	const handleDemoUserClick = async (e) => {
		e.preventDefault();

		// GET DEMO USER NUMBER

		try {
			// determine what the demoUser's credentials should be based on the # of demo users that exists already

			const demoNumber = await fetch(url + '/demo', {
				method: 'get',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const numDemoUsers = await demoNumber.json();
			console.log(numDemoUsers);

			const demoEmail = `demo${numDemoUsers + 1}@pause.app`;
			const demoPassword = 'demo';

			const demoAccountCreds = {
				email: demoEmail,
				password: demoPassword,
				isDemo: true,
			};
			console.log(demoAccountCreds);

			// create a demo account with the new demoUser's credentials
			const createDemoAccount = await fetch(url + '/auth/signup', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(demoAccountCreds),
			});
			const newDemoAccount = await createDemoAccount.json();
			console.log(newDemoAccount);

			// log in newly created demoUser
			const loggedInDemo = await fetch(url + '/auth/login', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(demoAccountCreds),
			});
			const response = await loggedInDemo.json();
			console.log(response);
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
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password, confirmPassword } = formData;

		let newUser;

		if (password === confirmPassword) {
			newUser = { email, password };
		} else {
			alert('Woops! Your passwords do not match. Please try again.');
			document.location.reload();
		}
		try {
			const user = await fetch(url + '/auth/signup', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
			});
			const response = await user.json();
			if (response.error) {
				setErrorMsg(
					'An error occurred while trying to sign you up. Please try again. If you think you may already have an account under this email, please try logging in instead.'
				);
				setAttempted(attempted + 1);
				setFormData(emptyForm);
			} else {
				props.history.push('/login');
			}
		} catch (error) {
			console.log('err', error);
			alert(
				'An error occurred while attempting to sign you up. Please try again'
			);
		}
	};

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	const login = (
		<Link className='form-btn' to='/login'>
			<span>Have an account? Log in.</span>
		</Link>
	);

	const demo = (
		<input
			onClick={handleDemoUserClick}
			className='form-btn'
			type='submit'
			value='Try a demo account.'
		/>
	);

	return (
		<div className='sign-up-page'>
			<h2>Sign up</h2>
			<h3 className='error'>{errorMsg}</h3>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<input
					className='form-text-input'
					type='email'
					name='email'
					placeholder='email'
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					className='form-text-input'
					type='password'
					name='password'
					placeholder='password'
					value={formData.password}
					onChange={handleChange}
				/>
				<input
					className='form-text-input'
					type='password'
					name='confirmPassword'
					placeholder='confirm password'
					value={formData.confirmPassword}
					onChange={handleChange}
				/>
				<div className='form-btn-div'>
					<input type='submit' className='form-btn' />
					{login}
					{demo}
				</div>
			</form>
		</div>
	);
}
