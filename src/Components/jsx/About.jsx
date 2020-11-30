import React, { Component } from 'react';
import '../css/About.css';

function About() {
	return (
		<div className="about">
			<div className="about--heading">
				About Me{' '}
				<span role="img" aria-label="boy emoji">
					👱🏼‍♂️
				</span>
			</div>
			<p className="about--text">
				My name is Deep Parekh. I am a sophomore studying computer science
				and economics at{' '}
				<a
					id="rutgers"
					href="https://newbrunswick.rutgers.edu/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Rutgers University - New Brunswick
				</a>
				&nbsp;and an aspiring software engineer with a passion to build
				applications which have a social impact. On campus, I'm the
				Education Chair at{' '}
				<a
					id="usacs"
					href="https://usacs.rutgers.edu/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Rutgers USACS
				</a>
				, Creative Committee member at Rutgers Entrepreneurial Society, and
				Web Development Committee member at{' '}
				<a
					id="bits"
					href="https://www.instagram.com/rutgers_bits/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Rutgers BITS
				</a>
				. By being involved with these clubs and working with other
				committee members to create opportunities for students to learn and
				grow outside of their classes, I have made many new friends,
				developed my communication skills, and improved my technical skills
				as well! <br />
				<br /> Currently, I am a Full-Stack Developer intern at an Ed-Tech
				startup{' '}
				<a
					id="minosLabs"
					href="https://www.minoslabs.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Minos Labs
				</a>
				, where I use my web development skills to help build a platform to
				accelerate the careers of recent Full-Stack and Cybersecurity
				graduates by including Fortune 1000 leaders into the high impact
				training program offered by Minos Labs. <br />
				<br /> When I'm not trying to find the proper margin and padding of a
				div, you can find me exercising to stay fit, trying to learn
				ukulele, exploring new Christmas songs, having fun with my family,
				working on my internship, or building fun side projects.{' '}
			</p>
		</div>
	);
}

export default About;
