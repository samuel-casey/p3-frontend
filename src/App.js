import React, { useState, createContext } from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Quote from './Components/Quote/Quote'

function App() {
	return (
		<div className='App'>
			<Nav />
			<main>
				<h1>Name of App</h1>
				<h2>Resources to pass the time & to take care of your mind</h2>
				<Quote />
			</main>
		</div>
	);
}

export default App;
