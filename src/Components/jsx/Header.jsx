import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../css/Header.css';

function handleClick() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Header() {
	const [showHand, setShowHand] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 500) {
				setShowHand(true);
			} else {
				setShowHand(false);
			}
		});
		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	return (
		<div className="header--navbar">
			<div className="logo">
				<i>DP</i>
			</div>
			<ul className="nav-links">
				<li>
					<a href="#">
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
						>
							About
						</Link>
					</a>
				</li>
				<li>
					<a href="#">
						<Link
							to="experience"
							spy={true}
							smooth={true}
							offset={-60}
							duration={700}
						>
							Skills
						</Link>
					</a>
				</li>
				<li>
					<a href="#">
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-50}
							duration={800}
						>
							Projects
						</Link>
					</a>
				</li>
				<li>
					<a href="#">
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-20}
							duration={900}
						>
							Contact
						</Link>
					</a>
				</li>
			</ul>
			{showHand && (
				<span
					onClick={() => handleClick()}
					className="hand-up"
					role="img"
					aria-label="hand pointing up"
				>
					☝
				</span>
			)}
		</div>
	);
}

export default Header;
