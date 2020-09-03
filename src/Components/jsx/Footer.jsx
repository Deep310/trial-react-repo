import React , { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedinIn, FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from "react-icons";  

class Footer extends Component{
    render(){
        return(
            <footer className = 'contact'>
                <Container fluid>
                    <Row>
                        <Col>
                            <p className='contact--heading font-weight-bold text-center'>Get In Touch</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='contact--text'>Thanks for visiting!
                             I'm always looking for new opportunities and connections. My
                            inbox is always open. Whether you have a question
                             or just want to say hi, feel free to message me. I'll try my best to get
                              back to you as soon as possible.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <a href="https://github.com/Deep310" target="_blank" rel="noopener noreferrer">
                                    <IconContext.Provider value={{ color: "white", size: "3em", className: "react-icons" }}>
                                    <FaGithub />
                                    </IconContext.Provider>
                                </a>
                                <a href="https://www.linkedin.com/in/deep-parekh/" target="_blank" rel="noopener noreferrer">
                                    <IconContext.Provider value={{ color: "white", size: "3em", className: "react-icons" }}>
                                    <FaLinkedinIn />
                                    </IconContext.Provider>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100006023175255" target="_blank" rel="noopener noreferrer">
                                    <IconContext.Provider value={{ color: "white", size: "3em", className: "react-icons" }}>
                                    <FaFacebookSquare />
                                    </IconContext.Provider>
                                </a>
                                <a href="mailto:dparekh2019@gmail.com">
                                    <IconContext.Provider value={{ color: "white", size: "3em", className: "react-icons" }}>
                                    <MdEmail />
                                    </IconContext.Provider>
                                </a>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;