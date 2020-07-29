import React , { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link , animateScroll as scroll }  from 'react-scroll';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './MyIntro.css';


const StyledButton = withStyles({
    root: {
      background: 'black',
      borderRadius: 5,
      border: '2px solid #988345',
      color: '#988345',
      height: 50,
      padding: '0 30px',
      marginBottom: '80px'
    },
    label: {
      fontSize: '1.2rem',
      fontWeight: 600,
      textTransform: 'capitalize',
    },
})(Button);

class MyIntro extends Component {
    render(){
        return( 
            
            <section className = "Intro">
                <Container fluid >
                    <Row>
                        <Col>
                            <p className="greeting">Hi, my name is</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="text-uppercase font-weight-bold name">Deep Parekh</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='box'></div>

                            <p className="roles text-center">Student / Programmer / Web Enthusiast</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <StyledButton onClick={scroll.scrollToBottom}>
                                <Link
                                    activeClass="active"
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={900}
                                >
                                    Get In Touch
                                </Link>
                            </StyledButton>
                             
                                            
                        </Col>
                    </Row>                    
                </Container>
                
            </section>
        

        )
    }
}

export default MyIntro;