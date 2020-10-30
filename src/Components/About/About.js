import React from 'react';
import './About.scss';

export default function About() {
	return (
		<>
			<div className='about-page'>
				<h1 id='about'>About</h1>
				<div id='intro'>
					Welcome to the *insert name here* App. Constructed by yours truly With
					our App our goal is to bring a better sense of self through
					motivation, goal structure,and help improving organisational skills.
				</div>
				<br />
				<section className='custom-container'>
					<div id='Sam' className='us'>
						<div className='pics'>
							<img src='https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60' />
						</div>
						<span className='abouts'>Sam</span>
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
							<img src='https://images.unsplash.com/photo-1501673618753-48ce9418287b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60' />
						</div>
						<span className='abouts'>Jaime</span>
						<p>content here</p>
					</div>
					<div id='Kim' className='us'>
						<div className='pics'>
							<img src='https://images.unsplash.com/photo-1586490915014-b2490ffd4727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60' />
						</div>{' '}
						<span className='abouts'>Kim</span>
						<p>content here</p>
					</div>
					<div id='Q' className='us'>
						<div className='pics'>
							<img src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' />
						</div>
						<span className='abouts'>Q</span>
						<p>content here</p>
					</div>
				</section>
			</div>
		</>
	);
}
