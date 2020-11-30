import React from 'react';
import '../css/Projects.css';
import MinosLabs from '../img/minos-labs.PNG';
import Covid19Tracker from '../img/covid19-tracker.PNG';
import NetflixClone from '../img/netflix-clone.PNG';
import Minesweeper from '../img/minesweeper.PNG';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from 'react-icons/fa';

function Projects() {
	return (
		<div className="projects">
			<div className="projects--heading">
				My Projects and Experience{' '}
				<span role="img" aria-label="laptop emoji">
					💻
				</span>
			</div>
			<div className="projects--subheading">
				Below I have illustrated a brief overview of what I'm currently
				working on and some of the projects I have built!
			</div>
			<div className="projects--body">
				<div className="projects--project1">
					<div className="projects--project1-img">
						<div style={{ height: '40px' }}></div>
						<img src={MinosLabs} alt="Covid Tracker" />
						<div style={{ height: '40px' }}></div>
					</div>
					<div className="projects--project1-text">
						<div className="projects--project1-text-heading">
							Minos Labs
						</div>
						<div className="projects--project1-text-desc">
							As a Full-Stack Developer intern at Minos Labs, I work with
							a small team of developers to design and build a platform
							to accelerate the careers of recent college graduates. I am
							responsible for building the corporate portal of the
							website, using React, which allows employers to keep track
							of candidates' progress. I test the frontend to ensure
							there are no bugs and UX remains the best. I also worked on
							successfully connecting the frontend with Firebase database
							and create database queries to efficiently retrieve user
							information.
						</div>
						<div className="projects--project1-text-btn">
							<Button variant="outline-danger">
								<a
									href="https://www.minoslabs.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Visit Website
								</a>
							</Button>{' '}
						</div>
					</div>
				</div>

				<div className="projects--project2">
					<div className="projects--project2-img">
						<div style={{ height: '10px' }}></div>
						<img src={Covid19Tracker} alt="Covid Tracker" />
						<div style={{ height: '10px' }}></div>
					</div>

					<div className="projects--project2-text">
						<div className="projects--project2-text-heading">
							Covid-19 Tracker
						</div>
						<div className="projects--project2-text-desc">
							I made this tracker because I felt that the COVID19 stats
							are widely distributed among many websites and there is
							absence of a place where I can understand the situation
							visually. I built this Covid19 Tracker using React,
							react-leaflet, react-chartjs, disease.sh API, and
							Material-UI. It displays current coronavirus cases,
							recoveries, and deaths of over 200 countries.
						</div>
						<div className="projects--project2-text-btn">
							<Button variant="outline-danger">
								<a
									href="https://brave-pike-7e4f0d.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Visit Website
								</a>
							</Button>{' '}
						</div>
					</div>
				</div>

				<div className="projects--project3">
					<div className="projects--project3-img">
						<img src={NetflixClone} alt="Covid Tracker" />
					</div>
					<div className="projects--project3-text">
						<div className="projects--project3-text-heading">
							Netflix Clone
						</div>
						<div className="projects--project3-text-desc">
							I built this Netflix clone to test my knowledge of using
							API in React. I used TMDb API to fetch information about
							Netflix shows. By building this project, I learned a lot
							about using APIs in React and using React hooks. I have
							deployed the project on Firebase. Check it out below!
						</div>
						<div className="projects--project3-text-btn">
							<Button variant="outline-danger">
								<a
									href="https://my-netflix-clone-4639e.web.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Visit Website
								</a>
							</Button>{' '}
						</div>
					</div>
				</div>

				<div className="projects--project4">
					<div className="projects--project4-img">
						<img src={Minesweeper} alt="Covid Tracker" />
					</div>
					<div className="projects--project4-text">
						<div className="projects--project4-text-heading">
							Minesweeper
						</div>
						<div className="projects--project4-text-desc">
							Minesweeper was one of my favorite childhood games. I built
							my version of Minesweeper game using HTML, CSS, and
							JavaScript. I have deployed the game on Heroku. Check out
							the game and let me know whether you successfully placed
							all the flags on all mines or not!
						</div>
						<div className="projects--project4-text-btn">
							<Button variant="outline-danger">
								<a
									href="https://my-minesweeper-game.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Visit Website
								</a>
							</Button>{' '}
						</div>
					</div>
				</div>

				<div className="projects--button">
					<Button variant="outline-danger" size="lg">
						<a
							href="https://github.com/Deep310"
							target="_blank"
							rel="noopener noreferrer"
						>
							View More <FaArrowRight />
						</a>
					</Button>{' '}
				</div>
			</div>
		</div>
	);
}

export default Projects;
