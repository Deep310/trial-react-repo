import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import '../css/Footer.css';

function Footer() {
	return (
		<footer className="contact">
			<p className="contact--heading">
				Stay In Touch
				<span role="img" aria-label="handshake emoji">
					🤝🏼
				</span>
			</p>

			<p className="contact--text">
				Thank you for visiting{' '}
				<span role="img" aria-label="love emoji">
					💖
				</span>
				! I hope you got an insight into my skills, experiences, and
				ambitions by viewing my website. If you have any questions about my
				skills or experiences, have an idea to build a side project
				together, or just want to say hi, feel free to message me!
			</p>

			<div class="contact--links">
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
