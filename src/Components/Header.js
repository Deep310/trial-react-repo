import React from 'react';
//import ReactDOM from 'react-dom';
import HeaderCSS from './Header.css';


class Header extends React.Component {
    render(){ 
        return(

            <header style = {HeaderCSS} className = "header"> 
                <div class = "logo">
                    <h4>Deep Parekh</h4>
                    
                </div>

                <ul class = "nav-links">
                    <li><a href = "#about">About</a></li>
                    <li><a href = "#skills">Skills</a></li>
                    <li><a href = "#contact">Contact</a></li>
                </ul>
            </header>
      
        )
    }
}

export default Header;