import React from 'react';
import './About.scss';

export default function About() {
	return (
		<>
			<div className='about-page'>
				<h1 id='about'>About pause.app</h1>
				<div id='intro'>pause.app was built as part of a General Assembly</div>
				<br />
				<h1 id='about'>Team</h1>
				<section className='custom-container'>
					<div id='Sam' className='us'>
						<div className='pics'>
							<img src='https://res.cloudinary.com/scimgcloud/image/upload/v1600435704/headshot-ideo.jpg' />
						</div>
						<span className='abouts'>
							Sam{' '}
							<a href='https://github.com/samuel-casey/' target='blank'>
								<i className='fab fa-github'></i>
							</a>
						</span>
						<p>
							Sam is a full-stack web developer from Boston, MA with a passion
							for using his tech skills to help people solve problems in their
							daily lives. His favorite thing to do for self-care is to go for
							long walks and hikes in nature. He serves as this project's tech
							lead, responsible for architecture, planning, and incorporating
							teammates' work.
						</p>
					</div>
					<div id='Jaime' className='us'>
						<div className='pics'>
							<img src='https://res.cloudinary.com/dv01780vo/image/upload/v1604070046/received_2893661924081693_2_ysiho9.jpg' />
						</div>
						<span className='abouts'>
							Jaime{' '}
							<a href='https://github.com/jb0nd87 ' target='blank'>
								<i className='fab fa-github'></i>
							</a>
						</span>
						<p>content here</p>
					</div>
					<div id='Kim' className='us'>
						<div className='pics'>
							<img src='https://images.unsplash.com/photo-1586490915014-b2490ffd4727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60' />
						</div>{' '}
						<span className='abouts'>
							Kim{' '}
							<a href='https://github.com/kimrass14/' target='blank'>
								<i className='fab fa-github'></i>
							</a>
						</span>
						<p>content here</p>
					</div>
					<div id='Q' className='us'>
						<div className='pics'>
							<img src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' />
						</div>
						<span className='abouts'>
							Q{' '}
							<a href='https://github.com/theletterQ1' target='blank'>
								<i className='fab fa-github'></i>
							</a>
						</span>
						<p>content here</p>
					</div>
				</section>
			</div>
		</>
	);
}
