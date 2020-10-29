import React from 'react';
import './LikedItems.scss';

export default function LikedItems(props) {
	console.log('props', props);
	// const likedItems = props.likedList.map((item, index) => {
	const likedItems = props.likedList.map((item, index) => {
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
							className={item.isLiked ? 'btn-liked' : 'btn-notliked'}
							onClick={() => {
								props.handleLike(item);
							}}>
							<i class="far fa-thumbs-up"></i>
						</button>
					<button
						className='delete'
						onClick={() => {
							props.handleDelete(item);
						}}>
						<i class="fas fa-times"></i>
					</button>
				</div>
			</div>
		);
	});
	const empty = 'The activities you like best will be saved here';

	return (
		<>
			<div className='page-title'>Activities I Liked Best</div>
			{props.likedList.length > 0 ? likedItems : empty}
		</>
	);
}
