import React, { useEffect, useContext, useState } from 'react';
import { Route } from 'react-router-dom'
import './Quote.scss';
import { GlobalContext } from '../../App';

export default function Quote() {
	const { gState, setGState } = useContext(GlobalContext);

	const [quoteInfo, setQuoteInfo] = useState({ quote: '', author: '' });
	const { url } = gState;
	let author;
	let quote;
	const getQuote = async () => {
		const response = await fetch(url + '/quote');
		const quoteList = await response.json();
		const randomNumber = Math.floor(Math.random() * quoteList.length);
		const quoteObj = quoteList[randomNumber];
		setQuoteInfo({ quote: quoteObj.quote, author: quoteObj.author });
	};

	useEffect(() => {
		getQuote();
	}, []);

	return (
		<div className='quote'>
			<div className='quote-body'>
				<p className='random-quote'>
					{quoteInfo.quote} -{quoteInfo.author}
				</p>
			</div>
			<Route path='/auth/favs'>
				<button
					className={quoteInfo.isFav ? 'btn-fav' : 'btn-notfav'}
					onClick={() => {
						quoteInfo.handleFav();
					}}>
					<i class='far fa-heart'></i>
				</button>
			</Route>
		</div>
	);
}
