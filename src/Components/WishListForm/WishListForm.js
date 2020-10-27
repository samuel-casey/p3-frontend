import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../App';
import './WishListForm.scss';

/////ADD / UPDATES TO APP///////////
	// const [selectedItem, setSelectedItem] = useState()
	// const selectItem = (item) => {
	// 	setSelectedItem(item)
	// }

	// <Route
	// 	exact
	// 	path='/editform'
	// 	render={(rp) => (
	// 		<WishListForm
	// 			{...rp}
	// 			item={selectedItem}
	// 			handleSubmit={handleUpdate}
	//			label="Update Item"
	// 		/>
	// 	)}
	// />
	//
	// Add to <WishListForm /> at route '/wishlistform':
	// handleSubmit={handleCreate}
	// label="Create New Item"
	//
	// Pass to WishList component:
	// item={selectItem}
	//
	//MOVE HANDLESUBMIT FUNCTION TO APP
	// - rename to: handleCreate

	// const handleCreate = async (newItem) => {
	// 	e.preventDefault();
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
	// 		setWishList(response);
	// 		history.push("/wishlist")
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const handleUpdate = async (updatedItem) => {
	// 	e.preventDefault();
	// 	try {
	// 		const updatedItemList = await fetch(url + '/wishlist/', {
	// 			method: 'put',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Authorization: `bearer ${gState.token}`,
	// 			},
	// 			body: JSON.stringify(updatedItem),
	// 		});
	// 		const response = await updatedItemList.json();
	// 		setWishList(response);
	// 		history.push("/wishlist")
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

//////////////////////////////////////////

export default function WishListForm(props) {
	const { gState, setGState } = useContext(GlobalContext);
	const { url } = gState;
	const { wishList, setWishList } = props;

	//props.item in default useState here is to create a blank form
	const [formData, setFormData] = useState(props.item);

	// const input = React.useRef(null)

	///REMOVE HANDLESUBMIT AFTER LIFTING TO APP
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
