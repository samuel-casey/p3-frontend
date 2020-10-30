import React, { useState, createContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import About from './Components/About/About';
import Quote from './Components/Quote/Quote';
import WishList from './Components/WishList/WishList';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LogInForm from './Components/LogInForm/LogInForm';
import WishListForm from './Components/WishListForm/WishListForm';
import CompletedList from './Components/CompletedList/CompletedList';
import LikedItems from './Components/LikedItems/LikedItems';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FavQuotes from './Components/FavQuotes/FavQuotes';
import AppDescription from './Components/AppDescription/AppDescription';

export const GlobalContext = createContext(null);

function App() {
	const [gState, setGState] = useState({
		url: 'https://self-care-app-backend.herokuapp.com',
		token: null,
		email: null,
	});

	// if empty wishlist item here, all components can access empty wishlist item
	// favList -- for each quote if isFav === true
	const [wishList, setWishList] = useState([]);
	const [completedList, setCompletedList] = useState([]);
	const [likedList, setLikedList] = useState([]);
	const [quoteInfo, setQuoteInfo] = useState({
		quote: '',
		author: '',
		_id: '',
	});
	const [selectedItem, setSelectedItem] = useState();

	const selectItem = (item) => {
		console.log('selecteditem', item);
		setSelectedItem(item);
	};

	// get quote from DB and render to page
	const getQuote = async () => {
		const response = await fetch(gState.url + '/quote');
		const quoteList = await response.json();
		const randomNumber = Math.floor(Math.random() * quoteList.length);
		const quoteObj = quoteList[randomNumber];
		setQuoteInfo({
			quote: quoteObj.quote,
			author: quoteObj.author,
			_id: quoteObj._id,
		});
	};

	// change status of quote to fav/not-fav for user
	const handleFavClick = async () => {
		console.log('handleFavClick');
		const toggleFavQuote = { quoteId: quoteInfo._id, email: gState.email };
		console.log('toggleFavQuote', toggleFavQuote);
		console.log({ toggleFavQuote });

		try {
			const response = await fetch(gState.url + '/auth/favs', {
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

	const emptyWishListItem = {
		title: '',
		category: '',
		time_minutes: 0,
	};

	const handleDemoUserClick = async () => {
		const url = gState.url;

		// GET DEMO USER NUMBER

		try {
			// determine what the demoUser's credentials should be based on the # of demo users that exists already

			const demoNumber = await fetch(url + '/demo', {
				method: 'get',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const numDemoUsers = await demoNumber.json();
			console.log(numDemoUsers);

			const demoEmail = `demo${numDemoUsers + 1}@pause.app`;
			const demoPassword = 'demo';

			const demoAccountCreds = {
				email: demoEmail,
				password: demoPassword,
				isDemo: true,
			};
			console.log(demoAccountCreds);

			// create a demo account with the new demoUser's credentials
			const createDemoAccount = await fetch(url + '/auth/signup', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(demoAccountCreds),
			});
			const newDemoAccount = await createDemoAccount.json();
			console.log(newDemoAccount);

			// log in newly created demoUser
			const loggedInDemo = await fetch(url + '/auth/login', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(demoAccountCreds),
			});
			const response = await loggedInDemo.json();
			console.log(response);
			if (response.error) {
				alert(
					`An error occurred while attempting to log you in. Please try again \n${response.error}`
				);
			} else {
				window.localStorage.setItem('token', JSON.stringify(response.token));
				window.localStorage.setItem('email', JSON.stringify(response.email));
				setGState({ ...gState, token: response.token, email: response.email });

				console.log('response token', response.token);

				//seeding data for demo user
				const demoSeed = await fetch(url + '/demo/seed', {
					method: 'post',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${response.token}`,
					},
				});
				const json = await demoSeed.json();
				console.log('demo seeded', json);
				getWishList(response.token);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getWishList = async (token) => {
		try {
			/// NEED TO MAKE SURE ONLY AUTH'ED USER'S ITEMS ARE in GET of WISHLIST.JS controller
			const response = await fetch(gState.url + '/wishlist/', {
				method: 'get',
				headers: {
					Authorization: `bearer ${token}`,
				},
			});
			const json = await response.json();
			// temp lists for updating state based on booleans in DB
			let likes = [];
			let complete = [];
			let wish = [];
			// loop through DB items and push to appropriate temp list
			for (let i of json) {
				if (i.isLiked === true) {
					likes.push(i);
				}
				if (i.isComplete === true) {
					complete.push(i);
				} else {
					wish.push(i);
				}
			}
			// set state === temp lists
			setLikedList(likes);
			setWishList(wish);
			setCompletedList(complete);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCreate = async (newItem) => {
		try {
			const wishList = await fetch(gState.url + '/wishlist/', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `bearer ${gState.token}`,
				},
				body: JSON.stringify(newItem),
			});
			const response = await wishList.json();
			console.log('newItem: ', response);
			getWishList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = async (updatedItem) => {
		try {
			const updatedItemList = await fetch(
				gState.url + '/wishlist/' + updatedItem._id,
				{
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${gState.token}`,
					},
					body: JSON.stringify(updatedItem),
				}
			);
			const response = await updatedItemList.json();
			getWishList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCompleted = async (wishListItem) => {
		try {
			wishListItem.isComplete = !wishListItem.isComplete;

			const completedItem = await fetch(
				gState.url + '/wishlist/' + wishListItem._id,
				{
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${gState.token}`,
					},
					body: JSON.stringify(wishListItem),
				}
			);
			const response = await completedItem.json();
			getWishList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleLike = async (wishListItem) => {
		try {
			wishListItem.isLiked = !wishListItem.isLiked;

			const toggledLikeItem = await fetch(
				gState.url + '/wishlist/' + wishListItem._id,
				{
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${gState.token}`,
					},
					body: JSON.stringify(wishListItem),
				}
			);
			const response = await toggledLikeItem.json();
			getWishList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (wishListItem) => {
		try {
			const deletedItem = await fetch(
				gState.url + '/wishlist/' + wishListItem._id,
				{
					method: 'delete',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${gState.token}`,
					},
				}
			);
			const response = await deletedItem.json();
			getWishList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const token = JSON.parse(window.localStorage.getItem('token'));
		const email = JSON.parse(window.localStorage.getItem('email'));
		if (token && email) {
			// gState token and email not available until further down the tree
			setGState({ ...gState, token: token, email: email });
			getWishList(token);
		}
		getQuote();
	}, []);

	return (
		<GlobalContext.Provider value={{ gState, setGState }}>
			<div className='App'>
				<header>
					<Route
						render={(rp) => (
							<Header {...rp} handleDemoUserClick={handleDemoUserClick} />
						)}
					/>
				</header>
				<main>
					<Switch>
						<Route exact path='/'>
							<h1 id='home-logo'>
								<i class='fas fa-pause-circle'></i> pause.app
							</h1>
							<h2 className='motto'>
								pause<span className='blink_me1'>.</span> because mindful
								self-care matters
							</h2>
							<AppDescription />
							{/* <hr></hr> */}
							{/* <h4>
								pause.app keeps track of: - your self-care wishlist, self-care
								activities you have completed - the self-care activities you
								liked best - motivational quotes that inspire you.
							</h4> */}
							<h4 id='call-to-action'>
								Sign up, sign in, or try a demo for help making time for
								self-care.
							</h4>
						</Route>
						<Route
							path='/wishlist'
							render={(rp) => {
								return (
									<>
										<Quote
											quoteInfo={quoteInfo}
											getQuote={getQuote}
											handleFavClick={handleFavClick}
										/>
										<WishList
											{...rp}
											wishList={wishList}
											handleCompleted={handleCompleted}
											handleLike={handleLike}
											handleDelete={handleDelete}
											selectItem={selectItem}
											handleDemoUserClick={handleDemoUserClick}
										/>
									</>
								);
							}}
						/>
						<Route
							path='/completedlist'
							render={(rp) => {
								return (
									<>
										<Quote
											quoteInfo={quoteInfo}
											getQuote={getQuote}
											handleFavClick={handleFavClick}
										/>
										<CompletedList
											{...rp}
											handleLike={handleLike}
											handleDelete={handleDelete}
											completedList={completedList}
											handleCompleted={handleCompleted}
										/>
									</>
								);
							}}
						/>
						<Route
							path='/wishlistform'
							render={(rp) => {
								return (
									<WishListForm
										{...rp}
										item={emptyWishListItem}
										wishList={wishList}
										setWishList={setWishList}
										handleSubmit={handleCreate}
										label='Create New Item'
									/>
								);
							}}
						/>
						<Route
							exact
							path='/editform'
							render={(rp) => {
								return (
									<>
										<Quote
											quoteInfo={quoteInfo}
											getQuote={getQuote}
											handleFavClick={handleFavClick}
										/>
										<WishListForm
											{...rp}
											item={selectedItem}
											handleSubmit={handleUpdate}
											label='Update Item'
										/>
									</>
								);
							}}
						/>
						<Route
							path='/likeditems'
							render={(rp) => {
								return (
									<>
										<Quote
											quoteInfo={quoteInfo}
											getQuote={getQuote}
											handleFavClick={handleFavClick}
										/>
										<LikedItems
											{...rp}
											likedList={likedList}
											handleDelete={handleDelete}
											handleLike={handleLike}
										/>
									</>
								);
							}}
						/>
						<Route
							path='/signup'
							render={(rp) => (
								<>
									<Quote
										quoteInfo={quoteInfo}
										getQuote={getQuote}
										handleFavClick={handleFavClick}
									/>
									<SignUpForm
										{...rp}
										handleDemoUserClick={handleDemoUserClick}
									/>
								</>
							)}
						/>
						<Route
							path='/login'
							render={(rp) => (
								<>
									<Quote
										quoteInfo={quoteInfo}
										getQuote={getQuote}
										handleFavClick={handleFavClick}
									/>
									<LogInForm {...rp} />
								</>
							)}
						/>
						<Route path='/favquotes'>
							<>
								<FavQuotes handleFavClick={handleFavClick} />
							</>
						</Route>
						<Route path='/about'>
							<>
								<Quote
									quoteInfo={quoteInfo}
									getQuote={getQuote}
									handleFavClick={handleFavClick}
								/>
								<About />
							</>
						</Route>
					</Switch>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</GlobalContext.Provider>
	);
}

export default App;
