import React , { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-scroll';

class Header extends Component {
    render(){ 
        return(

            <header className = "header">
                <Container fluid>
                    <Row>
                        <Col>
                            <p className="myName">
                                <Link
                                    activeClass="active"
                                    to="MyIntro"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Deep Parekh 
                                </Link>
                            </p>
                        </Col>
                        <Col>
                            <div className="nav-content">
                                <ul className="nav-items">
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="About"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
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
                                            duration={500}
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
                                            offset={-70}
                                            duration={500}
                                        >
                                            Hobbies
                                        </Link>
                                    </li> 

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
      
        )
    }
}

export default Header;