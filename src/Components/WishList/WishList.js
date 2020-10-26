import React from 'react';
import {Link} from 'react-router-dom'
import './WishList.scss';


export default function WishList(props) {

// FOR TESTING////////////
//REMOVE COMPONENT FROM APP.JS!!!
	const wishList = [{
		title: "walk",
		time_minutes: 15,
		category: "exercise"
	},
	{
		title: "meditate",
		time_minutes: 15,
		category: "relax"
	}]
/////////////////////////////

	const wishlist = wishList.map((item, index) => {
	// const wishlist = props.wishList.map((item, index) => {
		return(
			<>
			
			<div className='list' key={index}>
				<div className='item-info'>
					<p className='title'>{item.title}</p>
					<p className='time'>{item.time_minutes}</p>
					<p className='category'>{item.category}</p>
				</div>
				{/* <div className='item-btns'>
					<Link to='/edit'>
						<button className='item-btns edit' onClick={() => {props.handleSave(item)}}>Edit</button>
					</Link>
					<Link to='/delete'>
						<button className='item-btns delete' onClick={() => {props.handleDelete(item)}}>Delete</button>
					</Link>
					<Link to='/completed'>
						<button className='item-btns completed' onClick={() => {props.handleCompleted(item)}}>Completed</button>
					</Link>
					<Link to='/like'>
						<button className='item-btns like' onClick={() => {props.handleLike(item)}}>Like</button>
					</Link>
				</div> */}
			</div>
			</>
		)
	})

	const loading = 'Patient pause....'

	return (
		<>
			<div className='page-title'>Wish List</div>
			{/* {props.wishList.length > 0 ? loading : wishlist} */}
			{wishList.length > 0 ? wishlist : loading}
		</>
	)
	}
