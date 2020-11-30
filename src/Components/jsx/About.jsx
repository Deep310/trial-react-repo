import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/About.css';

class About extends Component{
    render(){
        return(
            <Container fluid className="about">
                <Row>
                    <Col>
                        <p className='about--heading'>About Me</p>
                    </Col>
                </Row>
                <Row>
                    
                    <Col className="about--para-col">
                        <p className="about--para-1">Hello! I'm a rising sophomore at
                         <a id='rutgers' href='https://newbrunswick.rutgers.edu/'> Rutgers University-
                         New Brunswick</a> with a major in Computer Science with minors in Business
                        Administration and Cognitive Science. I enjoy learning new tricks and technologies
                         whether it is web development or solving programming challenges. I also spend time
                        working on a variety of interesting projects either on my own or with a team in hackathons. 
                         On campus, I serve
                         as an Education Chair of Rutgers USACS, working on bringing the CS community
                        on campus together through educational events. </p>

                        <p className="about--para-2">Here are a few technologies I've been working with recently:
                            <div className="about--listOfTech">
                                <ul className="about--listOfTech_list1">
                                    <li>&nbsp; HTML &amp; &#40;S&#41;CSS</li>
                                    <li>&nbsp; JavaScript &#40;ES6&#41;</li>
                                    <li>&nbsp; Node.js</li>
                                </ul>

                                <ul className="about--listOfTech_list2">
                                    <li>&nbsp; React</li>
                                    <li>&nbsp; Express</li>
                                    <li>&nbsp; Firebase</li>
                                </ul>

                            </div>
                            
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;