import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../App';
import './WishListForm.scss';

export default function WishListForm(props) {
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;
	const { wishList, setWishList } = props;

	//props.item in default useState here is to create a blank form
	const [formData, setFormData] = useState(props.item);

	const handleSubmit = (event) => {
		event.preventDefault();
		// const {_id} = props.item
		const { title, category, time_minutes } = formData;
		const { email } = gState;
		const newItem = { ...formData, title, category, time_minutes, email };
		props.handleSubmit(newItem);
		console.log('handlesubmit newItem', newItem);
		props.history.push('/wishlist');
	};

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	return (
		<div className='wishlist-form-page'>
			<div className='wishlist-form'>
				<h2>Add or Update an Item</h2>
				<form onSubmit={handleSubmit}>
					<input
						className='form-text-input'
						type='text'
						name='title'
						value={formData.title}
						placeholder='Title'
						onChange={handleChange}
					/>
					<input
						className='form-text-input'
						type='text'
						name='category'
						value={formData.category}
						placeholder='Category'
						onChange={handleChange}
					/>
					<input
						type='number'
						name='time_minutes'
						className='form-text-input'
						type='number'
						value={formData.time_minutes}
						placeholder='Time'
						onChange={handleChange}
					/>
					<input type='submit' className='form-btn' value={props.label} />
				</form>
			</div>
		</div>
	);
}
