import React, { useState } from 'react';
import './LogInForm.scss';

export default function LogInForm(props) {
	const [formData, setFormData] = useState(props.emptyUser);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleLogIn(formData);
		setFormData(props.emptyUser);
		// props.history.push('/wishlist');
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
			{/* ////// END LOG IN FORM /////// */}
		</div>
	);
}
