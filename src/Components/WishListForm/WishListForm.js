import React, {useState} from 'react';
import './WishListForm.scss';

export default function WishListForm(props) {

	//props.item in default useState here should create a blank form
	const [formData, setFormData] = useState(props.item)

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({...formData, [key]: value})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSubmit(formData)
	}
	

	return (
		<div className='wishlist-form'>
			<p>Add or Update an Item</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='title'
					value={props.wishlist.title} //or try {formData.title}
					placeholder='Title'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='category'
					value={props.wishlist.category} //or try {formData.category}
					placeholder='Category'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='time'
					value={props.wishlist.time_minutes} //or try {formData.time_minutes}
					placeholder='Time'
					onChange={handleChange}
				/>
				<input type='submit' value={props.label} />
		{/* should receive label prop from App to equal "Add" and "Update" */}
			</form>
		</div>
	)
}
