import React, { useState, createContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Quote from './Components/Quote/Quote';
import WishList from './Components/WishList/WishList';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LogInForm from './Components/LogInForm/LogInForm';
import WishListForm from './Components/WishListForm/WishListForm';
import CompletedList from './Components/CompletedList/CompletedList';
import LikedItems from './Components/LikedItems/LikedItems';

export const GlobalContext = createContext(null);

function App() {
	const [gState, setGState] = useState({
		// url: 'https://self-care-app-backend.herokuapp.com',
		url: 'http://localhost:4000',
		token: null,
		email: null,
	});

	// if empty wishlist item here, all components can access empty wishlist item
	// favList -- for each quote if isFav === true
	const [wishList, setWishList] = useState([]);
	const [completedList, setCompletedList] = useState([]);
	const [likedList, setLikedList] = useState([]);

	const [selectedItem, setSelectedItem] = useState();

	const selectItem = (item) => {
		console.log('selecteditem', item);
		setSelectedItem(item);
	};

	const emptyWishListItem = {
		title: '',
		category: '',
		time_minutes: 0,
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
					console.log('liked?', i);
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
		console.log('updateditem', updatedItem);
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
			//need to do more inspecting here
			// setWishList(response);
			getWishList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCompleted = async (wishListItem) => {
		try {
			wishListItem.isComplete = true;
			console.log(wishListItem);

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
			console.log('completedItem: ', response);
			setCompletedList(response);
			getWishList(gState.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleLike = async (wishListItem) => {
		try {
			wishListItem.isLiked = !wishListItem.isLiked;
			console.log(wishListItem);

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
			console.log('liked/unliked Item: ', response);
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
			console.log('deletedItem: ', response);
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
	}, []);

	return (
		<GlobalContext.Provider value={{ gState, setGState }}>
			<div className='App'>
				<header>
					<Nav />
				</header>
				<Switch>
					<main>
						<Route exact path='/'>
							<h1>Name of App</h1>
							<h2>Resources to pass the time & to take care of your mind</h2>
							<Quote />
						</Route>
						<Route
							path='/wishlist'
							render={(rp) => {
								return (
									<>
										<Quote />
										<WishList
											{...rp}
											// item={emptyWishListItem}
											wishList={wishList}
											handleCompleted={handleCompleted}
											handleLike={handleLike}
											handleDelete={handleDelete}
											selectItem={selectItem}
											// setWishList={setWishList}
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
										<Quote />
										<CompletedList
											{...rp}
											handleLike={handleLike}
											handleDelete={handleDelete}
											completedList={completedList}
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
									<WishListForm
										{...rp}
										item={selectedItem}
										handleSubmit={handleUpdate}
										label='Update Item'
									/>
								);
							}}
						/>
						<Route
							path='/likeditems'
							render={(rp) => {
								return (
									<LikedItems
										{...rp}
										likedList={likedList}
										handleDelete={handleDelete}
										handleLike={handleLike}
									/>
								);
							}}
						/>

						<Route path='/signup' render={(rp) => <SignUpForm {...rp} />} />
						<Route path='/login' render={(rp) => <LogInForm {...rp} />} />
					</main>
				</Switch>
				<footer>FOOTER</footer>
			</div>
		</GlobalContext.Provider>
	);
}

export default App;

///GET index of wishlist items
///this should actually go in WishList component
// const {gState, setGState} = React.useContext(GlobalCtx)

//////////////////////////////////////////
