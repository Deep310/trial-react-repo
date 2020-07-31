import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import myPicture from './img/myImagev2-min.jpg';

class About extends Component{
    render(){
        let width = window.innerWidth;
        if(width < 256){
            return(
                <div className="About">
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={5}>
                                <img id="myImage" alt='Deep Parekh' src={myPicture} />
                            </Col>
                            <Col>
                                <p className='heading text-center font-weight-bold'>About Me</p>
                                <p className='p1'>hi </p>
                            </Col>
                        </Row>
                    </Container>
                </div>       
            )
        }
        else{
            return(

                <div className="About">
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={5}>
                                <img id="myImage" alt='Deep Parekh' src={myPicture} />
                            </Col>
                            <Col>
                                <p className='heading text-center font-weight-bold'>About Me</p>
                                <p className='p1'>Hello! I'm a rising sophomore at <a id='my-rutgers' href='https://newbrunswick.rutgers.edu/'>Rutgers University
                                 - New Brunswick</a> with a major in Computer Science and minor in Business
                                  Administration and Cognitive Science. I enjoy learning new technologies
                                   and creating projects out of what I learn to really enhance the knowledge I
                                  acquired. Being a web enthusiast, I like to work on a variety of 
                                  interesting and meaningful projects that involve both, frontend and
                                   backend management. On campus, I serve as an Education Chair of Rutgers USACS, 
                                    working on bringing the CS community on campus together through educational events. </p>
                            </Col>
                        </Row>
                    </Container>
                </div>       
            )
        }
        
    }
}
 

export default About;