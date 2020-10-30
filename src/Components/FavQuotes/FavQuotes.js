import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../App';
import './FavQuotes.scss';
import Quote from '../Quote/Quote';

export default function FavQuotes(props) {
	const [favList, setFavList] = useState([]);
	const { gState } = useContext(GlobalContext);
	const { url } = gState;

	const getFavQuotes = async () => {
		// using gState to get user only work sometimes -- switching to use localStorage bc it's more consistent
		// something is likely going wrong with sign in process and this component isn't re-rendering whenever user logs in
		const currentUser = {
			email: JSON.parse(window.localStorage.getItem('email')),
		};

		console.log(currentUser);
		try {
			const getQuotes = await fetch(url + '/auth/getFavs', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(currentUser),
			});
			const quotes = await getQuotes.json();
			setFavList(quotes);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getFavQuotes();
	}, []);

	const favQuotes = favList.map((quote, index) => {
		return (
			<Quote
				favPage={true}
				quoteInfo={quote}
				key={index}
				handleFavClick={props.handleFavClick}
			/>
		);
	});
	const empty = (
		<>
			click{' '}
			<span>
				<i className='far fa-heart fav-page-heart'></i>
			</span>{' '}
			on quotes to see them here
		</>
	);

	const logInMsg = (
		<p>
			Sign up, log in, or try a demo to{' '}
			<span>
				<i className='far fa-heart fav-page-heart'></i>
			</span>{' '}
			quotes.
		</p>
	);

	return (
		<i>
			<h3 id='fav-quotes-title'>Favorite Quotes</h3>
			{favList.length > 0 ? favQuotes : empty}
			{gState.token ? null : logInMsg}
		</i>
	);
}
