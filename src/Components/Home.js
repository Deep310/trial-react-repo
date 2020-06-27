import React from 'react';
import Header from './Header.js';
import MyIntro from './MyIntro.js';
import About from './About.js';
import Skills from './Skills.js';
import Footer from './Footer.js';



class Home extends React.Component{
    render(){
        return(
            <div className = "home">
                <Header />
                <MyIntro />
                <About />
                <Skills />
                <Footer />
            </div>

        )
    }
}

export default Home;