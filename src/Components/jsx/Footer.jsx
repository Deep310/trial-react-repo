import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedinIn, FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import '../css/Footer.css';

function Footer() {
	return (
		<footer className="contact">
			<p className="contact--heading">Stay In Touch</p>

			<p className="contact--text">
				Thank you for visiting! I hope you got an insight into my skills,
				experiences, and ambitions by viewing my website. If you have any
				questions about my skills or experiences, have an idea to build a
				side project together, or just want to say hi, feel free to message
				me!
			</p>

			<div>
				<a
					href="https://github.com/Deep310"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconContext.Provider
						value={{
							color: 'white',
							size: '40px',
							className: 'react-icons',
						}}
					>
						<FaGithub />
					</IconContext.Provider>
				</a>
				<a
					href="https://www.linkedin.com/in/deep-parekh/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconContext.Provider
						value={{
							color: 'white',
							size: '40px',
							className: 'react-icons',
						}}
					>
						<FaLinkedinIn />
					</IconContext.Provider>
				</a>

				<a href="mailto:dparekh2019@gmail.com">
					<IconContext.Provider
						value={{
							color: 'white',
							size: '40px',
							className: 'react-icons',
						}}
					>
						<MdEmail />
					</IconContext.Provider>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
