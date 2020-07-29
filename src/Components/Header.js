import React , { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-scroll';
import './Header.css';

class Header extends Component {
    render(){ 
        return(

            <div className="header">
                <Container fluid >
                    <Row>
                        <Col xs={2} sm={3} md={5} lg={7} className="text-left">
                            <p className="myName">
                                Deep Parekh 
                            </p>
                        </Col>
                        <Col className="text-right">
                            <div className="nav-content">
                                <ul className="nav-items">
                                    <li className="nav-item">
                                        <Link
                                            to="About"
                                            spy={true}
                                            smooth={true}
                                            offset={-10}
                                            duration={500}
                                            >
                                            About
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="Experience"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={700}
                                        >
                                        Experience
                                        </Link>
                                    </li>
                                    <li className="nav-item">
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
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="Contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-20}
                                            duration={900}
                                        >
                                        Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
      
        )
    }
}

export default Header;