import React from 'react';
import SkillsCSS from './Skills.css';

class Skills extends React.Component{
    render(){
        return(
            <div className = 'forhr'>
                <hr></hr>
                <div className = 'myskills' id = 'skills' style = {SkillsCSS}>

                    <div className = 'actually'>

                        <p>Java</p>
                        <div className="container">    
                            <div className="progress1 progress-moved">
                                <div className="progress-bar1"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>HTML</p>
                        <div className="container">    
                            <div className="progress2 progress-moved">
                                <div className="progress-bar2"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>CSS</p>
                        <div className="container">    
                            <div className="progress3 progress-moved">
                                <div className="progress-bar3"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>JavaScript</p>
                        <div className="container">    
                            <div className="progress4 progress-moved">
                                <div className="progress-bar4"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>R</p>
                        <div className="container">    
                            <div className="progress5 progress-moved">
                                <div className="progress-bar5"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>React</p>
                        <div className="container">    
                            <div className="progress6 progress-moved">
                                <div className="progress-bar6"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <br></br>
                        
                    </div>

                    <div className = 'writing'>
                        <h1>Skills</h1>
                    </div>

                    <div className = "myprojects">
                        <a href="https://github.com/Deep310" target = "_blank" rel = "noopener noreferrer" className="projectsButton">Check out my projects!</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Skills;