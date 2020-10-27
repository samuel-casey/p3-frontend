import React from 'react';
import './LikedItems.scss';

export default function LikedItems(props) {
	const likedList = [
		{
			title: 'walk',
			time_minutes: 15,
			category: 'exercise',
		},
		{
			title: 'meditate',
			time_minutes: 15,
			category: 'relax',
		},
	];

	// const likedItems = props.likedList.map((item, index) => {
	const likedItems = likedList.map((item, index) => {
		return (
			<div className='liked-item' key={index}>
				<div className='item-info'>
					<p className='title'>{item.title}</p>
					<div className='second-row'>
						<p className='time'>{item.time_minutes}</p>
						<p className='category'>{item.category}</p>
					</div>
				</div>
				<div className='item-btns'>
					<button
						className='item-btns delete'
						onClick={() => {
							props.handleDelete(item);
						}}>
						Delete
					</button>
				</div>
			</div>
		);
	});
	const empty = 'The activities you like best will be saved here';

	return (
		<>
			<div className='page-title'>Activities I Liked Best</div>
			{/* {props.likedList.length > 0 ? likedItems : empty} */}
			{likedList.length > 0 ? likedItems : empty}
		</>
	);
}
