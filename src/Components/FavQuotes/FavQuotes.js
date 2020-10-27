import React from 'react';
import './FavQuotes.scss';

export default function FavQuotes(props) {
	const favquotes = props.favlist.map(item, index => {
		return (
			<div className='fav-item' key={index}>
				<div className='item-info'>
					<p className='title'>{item.quote}</p>
					<div className='second-row'>
						<p className='author'>{item.author}</p>
						<p className='category'>{item.theme}</p>
					</div>
				</div>
				<div className='item-btns'>
						<button className='item-btns delete' onClick={() => {props.handleDelete(item)}}>Delete</button>
				</div>
			</div>
		)
	})
	const empty = 'Your favorite quotes will be saved here'

	return (
		<>
			<div className='page-title'>Favorite Quotes</div>
			{props.favlist.length > 0 ? favquotes : empty}
		</>
	)
}
