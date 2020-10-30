import React, { useEffect, useContext, useState } from 'react';
// import { Route } from 'react-router-dom'
import './Quote.scss';
import { GlobalContext } from '../../App';

export default function Quote() {
	const { gState, setGState } = useContext(GlobalContext);

	const [favList, setFavList] = useState();

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

		try {
			const response = await fetch(url + '/auth/favs', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(toggleFavQuote),
			});
			const json = await response.json();
			console.log('json', json);

//KIM's attempt at getting all the favorite quotes
//run inside or outside handleClick function??
//I think we need to send the email in the get request
//but getting an error that GET can have a body??
		const getQuotes = async () => {
			console.log('email', gState.email)
		const getQuotes = await fetch(url + '/auth/favs', {
			method: "get",
			headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(gState.email)
		})
		console.log("hi")
		const quotes = await getQuotes.json()
		setFavList(quotes)
		console.log('favlist', favList)
		}
		getQuotes()
	
			
		} catch (error) {
			console.log(error);
		}
	};

//KIM's attempt at getting all the favorite quotes
//run outside handleClick function??
	// const getQuotes = async () => {
	// 	const response = await fetch(url + '/auth/favs', {
	// 		method: "get",
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		// body: JSON.stringify(gState.email)
	// 	})
	// 	const json = await response.json()
	// 	setFavList(json)
	// }
	// React.useEffect(() => {
	// 	getQuotes()
	// }, [])
	// console.log('favlist', favList)
	



	// const handleFav = async (favItem) => {
	// 	try {
	// 		favItem.isFav = !favItem.isFav;
	// 		console.log(favItem);
	// 		const toggleFavItem = await fetch(gState.url + '/' + favItem._id, {
	// 			method: 'put',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Authorization: `bearer ${gState.token}`,
	// 			},
	// 			body: JSON.stringify(favItem),
	// 		});
	// 		const response = await toggleFavItem.json();
	// 		console.log('faved/unfaved Quote: ', response);
	// 		getFavList(gState.token);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className='quote'>
			<div className='quote-body'>
				<p className='random-quote'>
					{quoteInfo.quote} <br></br>-{quoteInfo.author}
				</p>
			</div>
			{/* <Route path='/auth/favs'> */}
			<button
				className={quoteInfo.isFav ? 'btn-fav' : 'btn-notfav'}
				onClick={() => handleFavClick()}>
				<i class='far fa-heart'></i>
			</button>
			{/* </Route> */}
		</div>
	);
}
