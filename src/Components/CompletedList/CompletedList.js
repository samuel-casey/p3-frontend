import React, { useContext } from 'react';
import './CompletedList.scss';
import { GlobalContext } from '../../App';
import { Link } from 'react-router-dom';

export default function CompletedList(props) {
	console.log(props.completedList);
	const { gState, setGState } = useContext(GlobalContext);

	// const handleDelete = async (wishListItem) => {
	// 	try {
	// 		const deletedItem = await fetch(
	// 			gState.url + '/wishlist/' + wishListItem._id,
	// 			{
	// 				method: 'delete',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Authorization: `bearer ${gState.token}`,
	// 				},
	// 			}
	// 		);
	// 		const response = await deletedItem.json();
	// 		console.log('deletedItem: ', response);
	// 		// props.setWishList(response);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	const completed = props.completedList.map((item, index) => {
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
						className={item.isComplete ? 'btn-complete' : 'btn-notcomplete'}
						onClick={() => {
							props.handleCompleted(item);
						}}>
						<i class='fas fa-check'></i>
					</button>
					<button
						className='delete'
						onClick={() => {
							props.handleDelete(item);
							// handleDelete(item);
						}}>
						<i class='fas fa-times'></i>
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
	const empty = (
		<div className='empty'>
			Complete a wishlist activity to see completed items. You can do it!{' '}
			<i class='far fa-smile'></i> <i class='far fa-thumbs-up'></i>
		</div>
	);
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
			<div className='page-title'>Completed Self-Care Activities</div>
			{props.completedList.length > 0 ? completed : empty}
		</div>
	);
}
