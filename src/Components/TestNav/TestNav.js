import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { GlobalContext } from '../../App';


export default function TestNav() {
    const { gState, setGState } = useContext(GlobalContext);
    // const LogOutBtn ={LogOutBtn}



	let loggedInNav = (<nav>
		<h6>Hello {gState.email}</h6>
				<h6>{navLog}</h6>
				   <Link className='Links' to='/'>
					 <h4>Home</h4>
				   </Link>
				   <Link className='Links' to='/favquotes'>
					 <h4>Quotes</h4>
				   </Link>
				   <Link className='Links' to='/wishlist'>
					 <h4>Wish List</h4>
				   </Link>
				   <Link className='Links' to='/completedlist'>
					 <h4>Completed List</h4>
				   </Link>
				   <div id="hamburger"><h3>☰</h3></div>
				<LogOutBtn/>
			</nav>)

let loggedOutNav = (<nav>
	<h6>Hello Welcome to our App</h6>
			<Link classname= "Links" to ='/signup'>
				<p>Click here to sign up or login</p>
				</Link>
			   <Link className='Links' to='/'>
				 <h4>Home</h4>
			   </Link>
			   <Link className='Links' to='/favquotes'>
				 <h4>Quotes</h4>
			   </Link>
			   <Link className='Links' to='/wishlist'>
				 <h4>Wish List</h4>
			   </Link>
			   <Link className='Links' to='/completedlist'>
				 <h4>Completed List</h4>
			   </Link>
			   <div id="hamburger"><h3>☰</h3></div>

		</nav>)





	return gState.token ? loggedInNav : loggedOutNav;
}