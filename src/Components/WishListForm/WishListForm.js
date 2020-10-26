import React, {useState} from 'react';
import {GlobalCtx} from '../../App'
import './WishListForm.scss';

export default function WishListForm(props) {

	const {gState, setGState} = React.useContext(GlobalCtx)
	
///GET index of wishlist items
///this should actually go in WishList component
	// const {gState, setGState} = React.useContext(GlobalCtx)	
	// const {url, token} = gState	
	// const [wishList, setWishList] = React.useState(null)
	// const getWishList = async () => {
	// 	const response = await fetch(url + "/wishlist/", {
	// 		method: "get",
	// 		headers: {
	// 			Authorization: "bearer" + token
	// 		}
	// 	})
	// 	const json = await response.json()
	// 	setWishList(json)
	// }
	// React.useEffect(() => {
	// 	getWishList()
	// }, [])
//////////////////////////////////////////

	//props.item in default useState here is to create a blank form
	const [formData, setFormData] = React.useState(props.item)

	// const input = React.useRef(null)


	const handleSubmit = (event) => {
		event.preventDefault();
		const {title, category, time_minutes} = formData

		fetch(url + "/wishlist/", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `bearer ${token}`
			},
			body: JSON.stringify({title, category, time_minutes})
		})
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
		props.handleSubmit(data)
	}
	
	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({...formData, [key]: value})
	}

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
					type='text'
					name='time'
					value={formData.time_minutes}
					placeholder='Time'
					onChange={handleChange}
				/>
				<input type='submit' value={props.label} />
		{/* should receive label prop from App to equal "Add" and "Update" */}
			</form>
		</div>
	)
}
