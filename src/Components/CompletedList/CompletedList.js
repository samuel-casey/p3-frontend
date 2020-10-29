import React, { useContext } from 'react';
import './CompletedList.scss';
import { GlobalContext } from '../../App';

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
	const empty = 'Take 5 minutes for a wishlist item';
	return (
		<div className='list-page'>
			<div className='page-title'>Completed Self-Care Activities</div>
			{props.completedList.length > 0 ? completed : empty}
		</div>
	);
}
