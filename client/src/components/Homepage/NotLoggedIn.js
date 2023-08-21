import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../../styles/landing.css'

export default function NotLoggedIn() {

    return (
        <Container fluid='true' style={{justifyContent:'center', textAlign:'center', marginTop:'2%', padding:'5%'}}>
            <Row className='section' style={{padding:'10%'}}>
                <Col>
                    <h2>Stop Wasting Time Deciding What to Eat</h2>
                    <p>Food Genie helps you discover your next culinary adventure quickly and effortlessly.</p>
                    <Link to='/signup'><button className='call-to-action-btn'>Start Exploring</button></Link>
                </Col>
            </Row>
            <Row className='section'>
                <Container className='flex-container'>
                    <Col xs={12} md={6} lg={3}>
                        <Card>
                            <h3>Restaurant Search</h3>
                            <p>Explore a world of dining options with our easy-to-use restaurant search.</p>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card>
                            <h3>Food Search</h3>
                            <p>Craving something specific? Find restaurants serving your favorite dishes.</p>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card style={{alignItems:'center'}}>
                            <img src='./icons/stars/star-48.png' id='star'/>
                            <h3>Favorites</h3>
                            <p>Save and organize your go-to restaurants and must-try meals effortlessly.</p>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card>
                            <h3>Randomizer</h3>
                            <p>Can't decide? Let Food Genie choose for you and embark on a spontaneous food adventure!</p>
                        </Card>
                    </Col>
                </Container>
            </Row>
            <Row className='section'>
                <Container className='flex-container'>
                    <Col xs={12} md={6} lg={3}>
                        <blockquote>"Food Genie has transformed my dining experience. I love the randomizer feature!"</blockquote>
                        <p>- Sarah Johnson</p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <blockquote>"This app is a game-changer. It saves me so much time, and I've discovered amazing places to eat!"</blockquote>
                        <p>- Michael Smith</p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <blockquote>"Food Genie has transformed my dining experience. I love the randomizer feature!"</blockquote>
                        <p>- Johnson Sarah</p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <blockquote>"Food Genie has transformed my dining experience. I love the randomizer feature!"</blockquote>
                        <p>- Smith Michael</p>
                    </Col>
                </Container>
            </Row>
            <Row className='section'>
                <Container>
                    <h2>How Food Genie Works</h2>
                    <Col xs={12} md={4}>
                        <div className="step-icon">1</div>
                        <h3>Sign Up</h3>
                        <p>Create an account and personalize your Food Genie experience.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="step-icon">2</div>
                        <h3>Search</h3>
                        <p>Search for restaurants, cuisines, or use the randomizer for surprise suggestions.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="step-icon">3</div>
                        <h3>Save Favorites</h3>
                        <p>Save your favorite restaurants and dishes for easy access.</p>
                    </Col>
                </Container>
            </Row>
            {/* <Row>
                <Container>
                    <Col >
                    </Col>
                </Container>
            </Row> */}
            <Row className='section'>
                <Container>
                    <h2>About Food Genie</h2>
                    <Row>
                        <Col xs={12} md={6}>
                            <p>We are passionate about food and simplifying your dining decisions. Our mission is to help you discover amazing dining experiences effortlessly.</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src="/images/tofu.png" alt="Our Team" className="team-photo" style={{height:'200px', width:'200px'}}/>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row className='section'>
                <Container>
                    <h2>Contact Us</h2>
                    <Row>
                        <Col xs={12} md={6}>
                            <p>Have questions or feedback? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.</p>
                        {/* Include contact form here */}
                        </Col>
                        <Col xs={12} md={6}>
                            <p>You can also reach us at:</p>
                            <address>
                            Email: <a href="mailto:contact@foodgenie.com">contact@foodgenie.com</a><br />
                            Phone: +123-456-7890<br />
                            Address: 123 Foodie Street, Cityville
                            </address>
                        </Col>
                    </Row>
                </Container>
            </Row>

        </Container>
    )
}
