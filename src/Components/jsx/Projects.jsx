import React from 'react';
import '../css/Projects.css';
import MinosLabs from '../img/minos-labs.PNG';
import Covid19Tracker from '../img/covid19-tracker.PNG';

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
				Get an insight into what I'm currently working on and some of the
				projects I have built!
			</div>
			<div className="projects--body">
				<div className="projects--project1">
					<img className="projects--project1-img" src={MinosLabs} alt="Minos Labs homepage" />
					<div className="projects--project1-text">I'm interning at</div>
				</div>

                <div className="projects--project2">
                    <img className="projects--project2-img" src={Covid19Tracker} alt="Covid Tracker" />
                    <div className="projects--project2-text">I built this Covid tracker</div>
                </div>
			</div>
		</div>
	);
}

export default Projects;
