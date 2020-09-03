import React , { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-scroll';
import '../css/Header.css';

class Header extends Component {
    render(){ 
        return(
            <Container fluid className="header">
                <Row className="header--row">
                    <p className="header--logo">
                        Deep Parekh 
                    </p>
                    
                
                    <ul className="header--navbar">
                        <li className="header--navbar-item first-item">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >
                                About
                            </Link>
                        </li>

                        <li className="header--navbar-item">
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={700}
                            >
                            Experience
                            </Link>
                        </li>
                        <li className="header--navbar-item">
                            <Link
                                activeClass="active"
                                to="Hobbies"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={800}
                            >
                            Hobbies
                            </Link>
                        </li>
                        <li className="header--navbar-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={900}
                            >
                            Contact
                            </Link>
                        </li>
                    </ul>
                    
                </Row>
            </Container>
        )
    }
}

export default Header;