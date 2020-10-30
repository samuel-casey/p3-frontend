import React from 'react';
import './LikedItems.scss';

export default function LikedItems(props) {
	console.log('props', props);
	// const likedItems = props.likedList.map((item, index) => {
	const likedItems = props.likedList.map((item, index) => {
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
						className={item.isLiked ? 'btn-liked' : 'btn-notliked'}
						onClick={() => {
							props.handleLike(item);
						}}>
						<i class='far fa-star'></i>
					</button>
					<button
						className='delete'
						onClick={() => {
							props.handleDelete(item);
						}}>
						<i class='fas fa-times'></i>
					</button>
				</div>
			</div>
		);
	});
	const empty = (
		<div className='empty'>
			'The activities you like best will be saved here
		</div>
	);

	return (
		<div className='list-page'>
			<div className='page-title'>Activities I Liked Best</div>
			{props.likedList.length > 0 ? likedItems : empty}
		</div>
	);
}
