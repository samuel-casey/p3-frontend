import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../App';
import './WishList.scss';

export default function WishList(props) {
	console.log('wishlist props', props); //returns only the one new item. Not the wishList array.

	const { gState, setGState } = useContext(GlobalContext);

	//When creating new item, gives error that .map is not a function, but I refresh and it's added...
	const wishList = props.wishList.map((item, index) => {
		return (
			<>
				<div className='list' key={index}>
					<div className='item-info'>
						<p className='title'>{item.title}</p>
						<div className='second-row'>
							<p className='time'>{item.time_minutes}</p>
							<p className='category'>{item.category}</p>
						</div>
					</div>
					<div className='item-btns'>
						<button
							className='edit'
							onClick={() => {
								props.selectItem(item);
								props.history.push('/editform');
							}}>
							Edit
						</button>

						<button
							className='delete'
							onClick={() => {
								props.handleDelete(item);
							}}>
							<i class='fas fa-times'></i>
						</button>

						<button
							className='completed'
							onClick={() => {
								props.handleCompleted(item);
							}}>
							<i class='fas fa-check'></i>
						</button>

						<button
							className={item.isLiked ? 'btn-liked' : 'btn-notliked'}
							// className='btn-liked'
							onClick={() => {
								props.handleLike(item);
							}}>
							<i class='far fa-thumbs-up'></i>
						</button>
					</div>
				</div>
			</>
		);
	});

	const loading = 'Patient pause....';

	return (
		<>
			<div className='page-title'>Wish List</div>
			<button
				className='new-item'
				onClick={() => {
					props.history.push('/wishlistform');
				}}>
				<i class='fas fa-plus'></i> New Item
			</button>
			{/* {isLoggedIn} */}
			{props.wishList.length > 0 ? wishList : loading}
			{/* /// FOR TESTING ONLY //// */}
			{/* {wishList.length > 0 ? wishList : loading} */}
		</>
	);
}
