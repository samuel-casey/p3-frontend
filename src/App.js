import React, { useState, createContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Quote from './Components/Quote/Quote';
import WishList from './Components/WishList/WishList';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LogInForm from './Components/LogInForm/LogInForm';
import TestNav from './Components/TestNav/TestNav';
import WishListForm from './Components/WishListForm/WishListForm';

export const GlobalContext = createContext(null);

function App() {
	const [gState, setGState] = useState({
		url: 'https://self-care-app-backend.herokuapp.com',
		token: null,
		email: null,
	});

	// if empty wishlist item here, all components can access empty wishlist item
	// favList
	const [wishList, setWishList] = useState([]);
	// completedList

	const emptyWishListItem = {
		title: '',
		category: '',
		time_minutes: 0,
	};

	const getWishList = async (token) => {
		try {
			console.log(gState);
			console.log(`BEARER ${gState.token}`);
			const response = await fetch(gState.url + '/wishlist/', {
				method: 'get',
				headers: {
					Authorization: `bearer ${token}`,
				},
			});
			const json = await response.json();
			console.log(json);
			setWishList(json);
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
					<TestNav />
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
											// setWishList={setWishList}
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
