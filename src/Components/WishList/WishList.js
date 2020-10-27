import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../App';
import './WishList.scss';

export default function WishList(props) {
	const { gState, setGState } = useContext(GlobalContext);

	// FOR TESTING ONLY - TO BE DELETED////////////
	// const wishList = [
	// 	{
	// 		title: 'walk',
	// 		time_minutes: 15,
	// 		category: 'exercise',
	// 	},
	// 	{
	// 		title: 'meditate',
	// 		time_minutes: 15,
	// 		category: 'relax',
	// 	},
	// ];
	/////////////////////////////
	// const isLoggedIn = gState.email ? gState.email : null;
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
							className='item-btns edit'
							onClick={() => {
								props.selectItem(item);
								props.history.push('/edit');
							}}>
							Edit
						</button>

						<button
							className='item-btns delete'
							onClick={() => {
								props.handleDelete(item);
							}}>
							Delete
						</button>

						<button
							className='item-btns completed'
							onClick={() => {
								props.handleCompleted(item);
							}}>
							Done
						</button>

						<button
							className='item-btns like'
							onClick={() => {
								props.handleLike(item);
							}}>
							Like
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
			{/* {isLoggedIn} */}
			{props.wishList.length > 0 ? wishList : loading}
			{/* /// FOR TESTING ONLY //// */}
			{/* {wishList.length > 0 ? wishList : loading} */}
		</>
	);
}
