import React from 'react';
import { Link } from 'react-scroll';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import '../css/MyIntro.css';
import myPicture from '../img/myImage.jpg';

//adding custom styles to button
const StyledButton = withStyles({
	root: {
		borderRadius: 5,
		border: '2px solid #1b1b1b',
		color: '#1b1b1b',
		height: 50,
		padding: '0 30px',
		marginBottom: '6rem',
	},
	label: {
		fontSize: '1.2rem',
		fontWeight: 600,
		textTransform: 'capitalize',
	},
})(Button);

function MyIntro() {
	return (
		<div className="intro">
			<div className="intro--extra-div"></div>
			<div className="intro--main">
				<div className="intro--text">
					<p>
						Hello!{' '}
						<span role="img" aria-label="Waving Hand Emoji">
							👋
						</span>
					</p>
					<p className="intro--name">
						I'm <span className="name">Deep Parekh</span>, a student and
						an aspiring software engineer focused on developing
						applications that bring a small change in people's lives.{' '}
					</p>
					<p></p>
				</div>
				<div className="intro--img">
					<img id="myImage" alt="Deep Parekh" src={myPicture} />
				</div>
			</div>
			<div>
				<StyledButton>
					<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={-20}
						duration={900}
					>
						Get In Touch
					</Link>
				</StyledButton>
			</div>
		</div>
	);
}

export default MyIntro;
