import React from 'react';
import MyIntroCSS from './MyIntro.css';
import MyPicture from './img/myImagev2.jpg';

class MyIntro extends React.Component {
    render(){
        return(
            
            <section style = {MyIntroCSS} className = "main-intro">
                <div className = "text">
                    <p className = 'move hi'>Hi, I'm</p>
                    
                    <p className = 'move name'>Deep Parekh.</p>
                
                    <p className = "titles"> Student / Programmer / Web Enthusiast</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a className = "btn" href = "#contact"> Let's get in touch!</a>
                </div>
                
                <div className = "myimage">
                    <img src = {MyPicture} alt = "Deep Parekh" />
                </div>
            </section>
        

        )
    }
}

export default MyIntro;