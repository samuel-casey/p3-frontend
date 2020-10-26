import './App.scss';
import Nav from './Components/Nav/Nav';
import Quote from './Components/Quote/Quote'

//FOR TESTING ONLY - DELETE
import WishListForm from './Components/WishListForm/WishListForm'

function App() {
	return (
		<div className='App'>
			<Nav />
			<main>
				<h1>Name of App</h1>
				<h2>Resources to pass the time & to take care of your mind</h2>
				<Quote />
			</main>

	{/* DELETE */}
			<WishListForm />
		</div>
	);
}

export default App;
