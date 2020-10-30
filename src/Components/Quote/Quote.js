import React, { useEffect, useContext, useState } from 'react';
// import { Route } from 'react-router-dom'
import './Quote.scss';
import { GlobalContext } from '../../App';

export default function Quote() {
	const { gState, setGState } = useContext(GlobalContext);

	const [favColor, setFavColor] = useState(false);

	const [quoteInfo, setQuoteInfo] = useState({
		quote: '',
		author: '',
		_id: '',
	});
	const { url } = gState;
	let author;
	let quote;
	const getQuote = async () => {
		const response = await fetch(url + '/quote');
		const quoteList = await response.json();
		const randomNumber = Math.floor(Math.random() * quoteList.length);
		const quoteObj = quoteList[randomNumber];
		setQuoteInfo({
			quote: quoteObj.quote,
			author: quoteObj.author,
			_id: quoteObj._id,
		});
	};

	useEffect(() => {
		getQuote();
	}, []);

	const handleFavClick = async () => {
		console.log('handleFavClick');
		const toggleFavQuote = { quoteId: quoteInfo._id, email: gState.email };
		console.log('toggleFavQuote', toggleFavQuote);
		console.log({ toggleFavQuote });
		setFavColor(!favColor);
		console.log(favColor);

		try {
			const response = await fetch('http://localhost:4000' + '/auth/favs', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(toggleFavQuote),
			});
			const json = await response.json();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='quote'>
			<div className='quote-body'>
				<p className='random-quote'>
					{quoteInfo.quote}
					<p className='author'>{`${quoteInfo.author}`}</p>
				</p>
			</div>
			<div
				className={favColor ? 'quote-btn btn-fav' : 'quote-btn btn-not-fav'}
				onClick={() => handleFavClick()}>
				<i className='far fa-heart'></i>
			</div>
		</div>
	);
}
