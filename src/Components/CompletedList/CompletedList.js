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
			<div className='completed-item' key={index}>
				<div className='item-info'>
					<p className='title'>{item.title}</p>
					<div className='second-row'>
						<p className='time'>{item.time_minutes}</p>
						<p className='category'>{item.category}</p>
					</div>
				</div>
				<div className='item-btns'>
					{/* do we want a delete button for the completed items? */}
					<button
						className='item-btns delete'
						onClick={() => {
							props.handleDelete(item);
							// handleDelete(item);
						}}>
						Delete
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
		);
	});
	const empty = 'Take 5 minutes for a wishlist item';
	return (
		<>
			<div className='page-title'>Completed</div>
			{props.completedList.length > 0 ? completed : empty}
		</>
	);
}
