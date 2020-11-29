import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../css/Header.css';
import burger from '../img/burger-menu.png';

function handleClick() {
	console.log(33);
}

function Header() {
	const [hamburger, sethamburger] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (document.documentElement.clientWidth <= 1000) {
				sethamburger(true);
				console.log(document.documentElement.clientWidth);
			} else {
				sethamburger(false);
			}
		});
		return () => {
			window.removeEventListener('resize', () => {});
		};
	}, []);

	return (
		<div className="header--navbar">
			<div className="logo"><i>DP</i></div>
			<ul className="nav-links">
				<li>
					<a href="#">
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={0}
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
							offset={0}
							duration={700}
						>
							Experience
						</Link>
					</a>
				</li>
				<li>
					<a href="#">
						<Link
							to="Hobbies"
							spy={true}
							smooth={true}
							offset={-20}
							duration={800}
						>
							Hobbies
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
		</div>
	);
}

export default Header;
