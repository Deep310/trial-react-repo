import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/About.css';
import myPicture from '../img/myImage.jpg';

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
                    <Col xs={12} sm={12} md={12} lg={5}>
                        <img id="myImage" alt='Deep Parekh' src={myPicture} />
                    </Col>
                    <Col className="about--para-col">
                        <p className='about--para-1'>Hello! I'm a rising sophomore at
                         <a id='my-rutgers' href='https://newbrunswick.rutgers.edu/'> Rutgers University-
                         New Brunswick</a> with a major in Computer Science and minor in Business
                        Administration and Cognitive Science. I enjoy learning new technologies
                         and creating projects out of what I learn to test the knowledge I acquired.
                          Being a web enthusiast, I like to work on a variety of interesting projects
                         that mainly include working on frontend of an application. On campus, I serve
                         as an Education Chair of Rutgers USACS, working on bringing the CS community
                        on campus together through educational events. </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;