import React , { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Skills.css';
import ATTLogo from '../img/AT&T logo.png';

class Skills extends Component{
    render(){
        return(
            <div className = 'experience'>
                <Container fluid>
                    <Row>
                        <Col>
                            <p className='experience--heading text-center font-weight-bold'> Experience</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <img id='att-img' src={ATTLogo} alt='AT&amp;T Logo' />
                        </Col>
                        <Col>
                            <h2 className='text-left font-weight-bold my-exp'>Summer Learning Academy Extern, AT&T</h2>
                            <p className='experience1--des-1 text-center'>
                                - Acquired business and technical acumen along with personal growth and professional
                                 development across 80 hours of online learning developed to support students during 
                                 the 2020 COVID-19 pandemic.
                            </p>
                            <p className='experience1-des-2 text-center'>
                                -Gained insights and advice on business, leadership, and career from business executives
                                 and recognized experts.
                            </p>
                            <p className='experience1-des-3 text-center'>
                                -Networked with students and AT&T employees and asked questions to nationally renowned speakers. 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Skills;