import React from 'react';
import './CompletedList.scss';

export default function CompletedList(props) {

	const completed = props.completedlist.map(item, index => {
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
						<button className='item-btns delete' onClick={() => {props.handleDelete(item)}}>Delete</button>
		
						<button className='item-btns like' onClick={() => {props.handleLike(item)}}>Like</button>
				</div>
			</div>
		)
	})
	const empty = 'Take 5 minutes for a wishlist item'
	return (
		<>
			<div className='page-title'>Completed</div>
			{props.completedlist.length > 0 ? completed : empty}
		</>
	)
}
