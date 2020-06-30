import React from 'react';
//import ReactDOM from 'react-dom';
import HeaderCSS from './Header.css';


class Header extends React.Component {
    render(){ 
        return(

            <header style = {HeaderCSS} className = "header"> 
                <div class = "logo">
                    <h4>Deep Parekh<span role = "img" aria-label = "smiley-emoji">😄</span></h4>
                </div>

                <ul class = "nav-links">
                    <li><a href = "#about">About me</a></li>
                    <li><a href = "#skills">Skills</a></li>
                    <li><a href = "#contact">Contact me</a></li>
                </ul>
            </header>
      
        )
    }
}

export default Header;