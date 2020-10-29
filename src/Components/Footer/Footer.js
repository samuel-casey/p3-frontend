import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Footer() {
	return (
		<div id='footer'>
			<Nav className='justify-content-end'>
				{/* <Nav.Item>
					<Nav.Link href='/home'>About</Nav.Link>
				</Nav.Item> */}
				<Nav.Item>
					<Nav.Link
						href='https://github.com/samuel-casey/p3-backend'
						target='blank'>
						<i class='fab fa-github'></i>
						{''} GitHub
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}
