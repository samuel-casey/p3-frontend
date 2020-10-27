import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.scss';

export default function Nav() {
	return(
	<>
<nav>
	<h6>Hello *user*</h6>

       <Link className='Links' to='/FavQuotes'>
         <h4>Quotes</h4>
       </Link>
       <Link className='Links' to='/App'>
         <h4>Home</h4>
       </Link>
       <Link className='Links' to='/WishList'>
         <h4>Wish list</h4>
       </Link>
       <Link className='Links' to='/CompletedList'>
         <h4>Completed list</h4>
       </Link>
       <div id="hamburger"><h3>☰</h3></div>
	<button onClick ={prop.LogOutBtn} >Logout</button>
</nav>
</>
   );

}


