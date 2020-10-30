import React from 'react';
import './AppDescription.scss';

export default function AppDescription() {
	return (
		<div className='description-section'>
			<h4>take a pause to...</h4>
			<div className='description'>
				<div className='activity'>
					<div className='icon'>
						<i class='fas fa-clipboard-list'></i>
					</div>
					<p className='wording'>Make a self-care Wishlist</p>
				</div>
				<div className='activity'>
					<div className='icon'>
						{/* <i class='fas fa-check'></i> */}
						<i class='fas fa-clipboard-check'></i>
					</div>
					<p className='wording'>Mark your Wishlist complete</p>
				</div>
				<div className='activity'>
					<div className='icon'>
						<i class='far fa-star'></i>
					</div>
					<p className='wording'>Save self-care activities you liked best</p>
				</div>
				<div className='activity'>
					<div className='icon'>
						<i class='far fa-heart'></i>
					</div>
					<p className='wording'>
						Favorite motivational quotes that inspire you
					</p>
				</div>
			</div>
		</div>
	);
}
