import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../App';
import './WishListForm.scss';

export default function WishListForm(props) {
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;
	const { wishList, setWishList } = props;

	//props.item in default useState here is to create a blank form
	const [formData, setFormData] = useState(props.item);

	// const input = React.useRef(null)

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { title, category, time_minutes } = formData;
		const { email } = gState;
		const newItem = { title, category, time_minutes, email };
		try {
			const wishList = await fetch(url + '/wishlist/', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `bearer ${gState.token}`,
				},
				body: JSON.stringify(newItem),
			});
			const response = await wishList.json();
			console.log('newItem: ', response);
			props.setWishList(response);
			setFormData(props.item);
		} catch (error) {
			console.log(error);
		}
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 	});
		// props.handleSubmit(data);
	};

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	return (
		<div className='wishlist-form'>
			<p>Add or Update an Item</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='title'
					value={formData.title}
					placeholder='Title'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='category'
					value={formData.category}
					placeholder='Category'
					onChange={handleChange}
				/>
				<input
					type='number'
					name='time_minutes'
					value={formData.time_minutes}
					placeholder='Time'
					onChange={handleChange}
				/>
				<input type='submit' value={props.label} />
				{/* should receive label prop from App to equal "Add" and "Update" */}
			</form>
		</div>
	);
}
