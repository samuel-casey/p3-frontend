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
		props.handleDemoUserClick();
		props.history.push('/wishlist');
	};

	// handle sign up of new user
	const handleSubmit = async (e) => {
		e.preventDefault();
		props.handleSignUp();
		props.history.push('/wishlist');
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
