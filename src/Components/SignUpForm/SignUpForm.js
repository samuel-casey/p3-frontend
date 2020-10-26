import React, { useState } from 'react';
import './SignUpForm.scss';

export default function SignUpForm() {
	const [formData, setFormData] = useState();

	// const handleSignUp = () => {};

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
		console.log(formData);
	};

	return (
		<div className='sign-up-form'>
			<h2>Sign up</h2>
			<form onSubmit={handleUserSignUp}>
				<input
					className='form-text-input'
					type='email'
					name='email'
					placeholder='email'
					value={signUpFormUser.email}
					onChange={handleNewUserChange}
				/>
				<input
					className='form-text-input'
					type='password'
					name='password'
					placeholder='password'
					value={signUpFormUser.password}
					onChange={handleNewUserChange}
				/>
				<input
					className='form-text-input'
					type='password'
					name='confirmPassword'
					placeholder='confirm password'
					value={signUpFormUser.confirmPassword}
					onChange={handleNewUserChange}
				/>
				<input type='submit' />
			</form>
		</div>
	);
}
