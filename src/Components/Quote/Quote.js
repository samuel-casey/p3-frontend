import React, { useEffect, useContext, useState } from 'react';
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
		setQuoteInfo({
			quote: quoteObj.quote,
			author: quoteObj.author,
			_id: quoteObj._id,
		});
	};

	useEffect(() => {
		getQuote();
	}, []);

	// const quotes = quoteList.map((item, index) => {
	return (
		<div className='quote'>
			{quoteInfo._id}
			<div className='quote-body'>
				<p className='random-quote'>
					{quoteInfo.quote} -{quoteInfo.author}
				</p>
			</div>
		</div>
	);
	// });
}
