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
                        <div class="container">    
                            <div class="progress1 progress-moved">
                                <div class="progress-bar1"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>HTML</p>
                        <div class="container">    
                            <div class="progress2 progress-moved">
                                <div class="progress-bar2"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>CSS</p>
                        <div class="container">    
                            <div class="progress3 progress-moved">
                                <div class="progress-bar3"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>JavaScript</p>
                        <div class="container">    
                            <div class="progress4 progress-moved">
                                <div class="progress-bar4"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>R</p>
                        <div class="container">    
                            <div class="progress5 progress-moved">
                                <div class="progress-bar5"></div>                       
                            </div> 
                        </div>
                        <br></br>
                        <p>React</p>
                        <div class="container">    
                            <div class="progress6 progress-moved">
                                <div class="progress-bar6"></div>                       
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