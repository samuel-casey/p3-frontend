import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../App';
import './WishListForm.scss';


export default function WishListForm(props) {
	console.log('form props', props)
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;
	const { wishList, setWishList } = props;

	//props.item in default useState here is to create a blank form
	const [formData, setFormData] = useState(props.item);

	// const input = React.useRef(null)

	///REMOVE THIS HANDLESUBMIT AFTER LIFTING TO APP
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const { title, category, time_minutes } = formData;
	// 	const { email } = gState;
	// 	const newItem = { title, category, time_minutes, email };
	// 	try {
	// 		const wishList = await fetch(url + '/wishlist/', {
	// 			method: 'post',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Authorization: `bearer ${gState.token}`,
	// 			},
	// 			body: JSON.stringify(newItem),
	// 		});
	// 		const response = await wishList.json();
	// 		console.log('newItem: ', response);
	// 		props.setWishList(response);
	// 		setFormData(props.item);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const handleSubmit = (event) => {
	event.preventDefault();
	const {_id} = props.item
	const { title, category, time_minutes } = formData
	const {email} = gState
	const newItem = { _id, title, category, time_minutes, email }
	props.handleSubmit(newItem);
	console.log('handlesubmit newItem', newItem)
    props.history.push("/wishlist");
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
					value={formData.time_minutes}
					placeholder='Time'
					onChange={handleChange}
				/>
				<input type='submit' value={props.label} />
				
			</form>
		</div>
	);
}
