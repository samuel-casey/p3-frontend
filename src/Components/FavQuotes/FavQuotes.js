import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../App';
import './FavQuotes.scss';

export default function FavQuotes() {
	const [favList, setFavList] = useState([]);
	const { gState } = useContext(GlobalContext);
	const { url } = gState;

	const getFavQuotes = async () => {
		const currentUser = {
			email: JSON.parse(window.localStorage.getItem('email')),
		};
		console.log(typeof userEmail);
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
			console.log('favlist', favList);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getFavQuotes();
	}, []);

	const favQuotes = favList.map((item, index) => {
		return (
			<div className='fav-item' key={index}>
				<div className='item-info'>
					<p className='title'>{item.quote}</p>
					<div className='second-row'>
						<p className='author'>{item.author}</p>
						<p className='category'>{item.theme}</p>
					</div>
				</div>
			</div>
		);
	});
	const empty = 'Your favorite quotes will be saved here';

	return (
		<>
			<div className='page-title'>Favorite Quotes</div>
			{favList.length > 0 ? favQuotes : empty}
		</>
	);
}
