import React from 'react';
//import ReactDOM from 'react-dom';
import HeaderCSS from './Header.css';


class Header extends React.Component {
    render(){ 
        return(
            <header style = {HeaderCSS} className = 'html'>
                <div className = "header">
 
                    <h1 className = "myname"> Deep Parekh <span role = "img" aria-label = "smiley-emoji">😄</span></h1>
                    
                    <h3 className = "about"><a href = "#about">about me</a></h3>

                    <h3 className = "skills"><a href = "#skills">skills</a></h3>

                    <h3 className = "contact"><a href = "#footer-text">contact me</a></h3>
                                        
                </div>
                
            </header>
        )
    }
}

export default Header;