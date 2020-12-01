import React from 'react';
import { FaLaptopCode, FaRegFileCode, FaRegWindowRestore } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import '../css/Skills.css';

function Skills() {
	return (
		<div className="experience">
			<div className="experience--title">
				<p>
					What I'm good at{' '}
					<span role="img" aria-label="laptop man emoji">
						👨🏼‍💻
					</span>
				</p>
			</div>

			<div className="experience--skills">
				<Card className="experience--skill">
					<div className="experience--skill-extraspace"></div>
					<FaLaptopCode
						className="experience--skill-img"
						size={70}
						color="#f36"
					/>
					<Card.Body>
						<Card.Text className="experience--skill-title">
							Languages
						</Card.Text>
						<Card.Text className="experience--skill-text">
							<h5>HTML</h5>
							<h5>CSS</h5>
							<h5>JavaScript</h5>
							<h5>Java</h5>
							<h5>C</h5>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="experience--skill">
					<div className="experience--skill-extraspace"></div>
					<FaRegFileCode
						className="experience--skill-img"
						size={70}
						color="#f36"
					/>
					<Card.Body>
						<Card.Text className="experience--skill-title">
							Frameworks
						</Card.Text>
						<Card.Text className="experience--skill-text">
							<h5>React</h5>
							<h5>Node.js</h5>
							<h5>Express</h5>
							<h5>jQuery</h5>
							<h5>Bootstrap</h5>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="experience--skill">
					<div className="experience--skill-extraspace"></div>
					<FaRegWindowRestore
						className="experience--skill-img"
						size={70}
						color="#f36"
					/>
					<Card.Body>
						<Card.Text className="experience--skill-title">
							Tools
						</Card.Text>
						<Card.Text className="experience--skill-text">
							<h5>Git & GitHub</h5>
							<h5>Postman</h5>
							<h5>MongoDB</h5>
							<h5>VS Code</h5>
							<h5>Firebase</h5>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default Skills;
