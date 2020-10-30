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
							<img src='https://res.cloudinary.com/dzxytz23k/image/upload/v1604071747/SEI%20-%20Project%202/Kosuda_Kim_SharePoint_thz0g4.jpg' />
						</div>{' '}
						<span className='abouts'>Kim</span>
						<p>Kim is a forensic accountant turned software engineer and resides outside of Chicago. Her go-to self care activities are working out, spending undivided attention with family and meditating. Her main responsibilties were on the frontend creating components and button functionality.</p>
					</div>
					<div id='Q' className='us'>
						<div className='pics'>
							<img src='https://ca.slack-edge.com/T0351JZQ0-U019AALH40G-100389b693e6-512' />
						</div>
						<span className='abouts'>Q</span>
						<p>Q is a full stack web developer in the city of Los Angeles, California. He is an animal training turned software developer and technical skills are increasing day by day. This is the third project he has worked on, but the first in which group collaboration was required. He is pleased with the results. Specifically he was tasked with the About page and constructing the navigation bar for the front end, and working on some of the controllers and models on the backend. His go-to self care activities are hiking and meditation.</p>
					</div>
				</section>
			</div>
		</>
	);
}
