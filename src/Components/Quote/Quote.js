import React, { useEffect, useContext, useState } from 'react';
// import { Route } from 'react-router-dom'
import './Quote.scss';
import { GlobalContext } from '../../App';

export default function Quote(props) {
	const [favColor, setFavColor] = useState(false);

	const notFavPage = (
		<div className='quote'>
			<div className='quote-body'>
				<p className='random-quote'>
					{props.quoteInfo.quote}
					<p className='author'>{`${props.quoteInfo.author}`}</p>
				</p>
			</div>
			<div
				className={favColor ? 'quote-btn btn-fav' : 'quote-btn btn-not-fav'}
				onClick={() => {
					props.handleFavClick();
					setFavColor(!favColor);
				}}>
				<i className='far fa-heart'></i>
			</div>
		</div>
	);

	const favPage = (
		<div className='quote'>
			<div className='quote-body'>
				<p className='random-quote'>
					{props.quoteInfo.quote}
					<p className='author'>{`${props.quoteInfo.author}`}</p>
				</p>
			</div>
			{/* Need to figure out how to let user unfavorite a quote still */}
			<div className='quote-btn btn-fav'>
				<i className='far fa-heart'></i>
			</div>
		</div>
	);

	return props.favPage ? favPage : notFavPage;
}
