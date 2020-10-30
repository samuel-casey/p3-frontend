import React from 'react';
import './About.scss';

export default function About() {
	return (
		<>
			<div className='about-page'>
				<h1 id='about'>About pause.app</h1>
				<div id='intro'>
					<p>
						<span className='pause-p'>pause.app</span> helps people organize
						their lives and collect their thoughts around self-care.{' '}
						<span className='pause-p'>pause.app</span> is designed for busy
						people who want help finding balance and being more intentional with
						their time.
					</p>
					<p>
						<span className='pause-p'>pause.app</span> was built in a week as
						part of a General Assembly bootcamp. It's built with the MERN stack:
						MongoDB, Express, React, and Node.js.
					</p>
				</div>
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
						<p>
							Jaime is a full-stack web developer from the San Francisco Bay
							Area. He has a passion for rock climbing which involves taking
							time to figure out a way to get to the top quickly and safely. He
							uses that thought process on the many projects that he has worked
							on to finish them. He serves as one of the main backend developers
							for the app, creating the controllers and seeding the data.
						</p>
					</div>
					<div id='Kim' className='us'>
						<div className='pics'>
							<img src='https://res.cloudinary.com/dzxytz23k/image/upload/v1604071747/SEI%20-%20Project%202/Kosuda_Kim_SharePoint_thz0g4.jpg' />
						</div>{' '}
						<span className='abouts'>
							Kim{' '}
							<a href='https://github.com/kimrass14/' target='blank'>
								<i className='fab fa-github'></i>
							</a>
						</span>
						<p>
							Kim is a forensic accountant turned software engineer and resides
							outside of Chicago. Her go-to self care activities are working
							out, spending undivided attention with family and meditating. Her
							main responsibilties were on the frontend creating components and
							button functionality.
						</p>
					</div>
					<div id='Q' className='us'>
						<div className='pics'>
							<img src='https://ca.slack-edge.com/T0351JZQ0-U019AALH40G-100389b693e6-512' />
						</div>
						<span className='abouts'>
							Q{' '}
							<a href='https://github.com/theletterQ1' target='blank'>
								<i className='fab fa-github'></i>
							</a>
						</span>
						<p>
							Q is a full stack web developer in the city of Los Angeles,
							California. He is an animal training turned software developer and
							technical skills are increasing day by day. This is the third
							project he has worked on, but the first in which group
							collaboration was required. He is pleased with the results.
							Specifically he was tasked with the About page and constructing
							the navigation bar for the front end, and working on some of the
							controllers and models on the backend. His go-to self care
							activities are hiking and meditation.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
