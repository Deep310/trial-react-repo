import React from 'react';
import AboutCSS from './About.css';

class About extends React.Component{
    render(){
        return(
            <div className = "forhr">
                <hr></hr>
                <div className = "aboutMe" id = "about" style = {AboutCSS}>
                    
                    <div className = "vishay">
                        <h1 className = 'first'>A little</h1>
                        <h1 className = 'second'>about me</h1>
                    </div>

                    <div className="vertical"></div>
                    <div className = "desc">
                        <p>I am a rising sophomore at <a href = "https://www.rutgers.edu/new-brunswick" target = "_blank" rel ="noopener noreferrer">Rutgers University - New Brunswick</a> majoring in computer
                        science and minoring in business adminstration and cognitive science. I adore coding as
                        I enjoy building creative things with code and applying the logic to solve real-world
                        problems. Outside of classes, I like to keep busy by being involved in the community, 
                        especially in computer science. Currently, I am learning about web development  
                        by familiarizing myself with various JavaScript frameworks such as React, Vue and databases  
                        such as MySQL. When I am not busy coding, you can find me watching TV shows on netflix, 
                        reading books, baking vegan cakes, writing blogs, or making paintings.</p>
                
                    </div>
                </div>
            </div>       
        )
    }
}
 

export default About;