import React, { useState } from 'react';
import './SignUpForm.scss';

export default function SignUpForm(props) {
	const [formData, setFormData] = useState(props.emptyUser);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.password === formData.confirmPassword) {
			const newUser = {
				email: formData.email,
				password: formData.password,
			};
			props.handleSignUp(newUser);
			setFormData(props.emptyUser);
		} else {
			alert('Woops! Your passwords do not match. Please try again.');
			document.location.reload();
		}
	};

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	return (
		<div className='sign-up-page'>
			<h2>Sign up</h2>
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
				<input type='submit' className='form-btn' />
			</form>
		</div>
	);
}
