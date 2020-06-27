import React from 'react';
import MyIntroCSS from './MyIntro.css';
import MyPicture from './img/myImage.jpg';

class MyIntro extends React.Component {
    render(){
        return(
            <div style = {MyIntroCSS} className = "main-intro">
                <div className = "text">
                    <h1>
                        <span className = 'move'>H</span>
                        <span className = 'move'>i</span>
                        <span className = 'move'>,</span>
                        <span className = 'move'>I</span>
                        <span className = 'move'>'</span>
                        <span className = 'move'>m</span>
                        <br></br>
                        <span className = 'name'>D</span>
                        <span className = 'name'>e</span>
                        <span className = 'name'>e</span>
                        <span className = 'name'>p</span>
                        <span className = 'firstletter'>P</span>
                        <span className = 'surname'>a</span>
                        <span className = 'surname'>r</span>
                        <span className = 'surname'>e</span>
                        <span className = 'surname'>k</span>
                        <span className = 'surname'>h</span>
                        <span className = 'surname'>.</span>
                    </h1>
                    
                    <p>Student / Programmer / Web Developer</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="#footer-text" className="myButton">Let's get in touch!</a>
                    
                    
                </div>

                <div className = "image">
                    <img src = {MyPicture} alt = "Deep Parekh"></img>
                </div>

                
            </div>
        )
    }
}

export default MyIntro;