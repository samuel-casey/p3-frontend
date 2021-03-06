import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../App';
import './WishList.scss';
import Spinner from 'react-bootstrap/Spinner';

export default function WishList(props) {
	const { gState, setGState } = useContext(GlobalContext);

	const wishList = props.wishList.map((item, index) => {
		return (
			<div className='list' key={index}>
				<div className='item-info'>
					<p className='time'>{item.time_minutes}</p>
					<div className='second-column'>
						<p className='title'>{item.title}</p>
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
						<i class='fas fa-edit'></i>
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
						onClick={() => {
							props.handleLike(item);
						}}>
						<i class='far fa-star'></i>
					</button>
				</div>
			</div>
		);
	});

	const loading = (
		<b>
			<p>Patiently pausing while you add items</p>
			<Spinner animation='grow' variant='light' size='sm' />
			<Spinner animation='grow' variant='light' size='sm' />
			<Spinner animation='grow' variant='light' size='sm' />
		</b>
	);

	const loggedInButtons = (
		<>
			<div>
				<button
					className='form-btn'
					onClick={() => {
						props.history.push('/wishlistform');
					}}>
					<i class='fas fa-plus'></i> New Item
				</button>
				<span onClick={() => document.location.reload()} className='refresh'>
					<i class='fas fa-sync-alt'></i>
				</span>
			</div>
		</>
	);

	const login = (
		<Link className='form-btn' to='/signup'>
			<span>Sign Up/Log in</span>
		</Link>
	);

	const demo = (
		<input
			onClick={() => props.handleDemoUserClick()}
			className='form-btn'
			type='submit'
			value='Try a demo account.'
		/>
	);

	const loggedOutButtons = (
		<div className='form-btn-div'>
			{login}
			{demo}
		</div>
	);

	// if the user is logged in show button and ability to add an item

	let wishListLoaded = props.wishList.length > 0 ? wishList : loading;
	let conditionalButtons = gState.token ? loggedInButtons : loggedOutButtons;

	// is user is not logged in show demo button and sign up page button

	return (
		<div className='list-page'>
			<div className='wishlist-links'>
				<Link to='/likeditems'>
					<i class='far fa-star'></i>
				</Link>
				<Link to='/wishlist'>Wishlist</Link>
				<Link to='/completedlist'>
					<i class='fas fa-check'></i>
				</Link>
			</div>
			<div className='page-title'>My Self-Care Wish List</div>
			{conditionalButtons}
			{gState.token ? (
				wishListLoaded
			) : (
				<h4 className='logged-out-msg'>
					Please sign up and log in or try a demo to see wish list.
				</h4>
			)}
		</div>
	);
}
