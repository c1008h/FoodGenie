import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

export default function NotLoggedIn() {

    return (
        <Container fluid='true' style={{justifyContent:'center', textAlign:'center', marginTop:'2%', padding:'5%'}}>
            <Row>
                <Col>
                    <h2>Stop Wasting Time Deciding What to Eat</h2>
                    <p>Food Genie helps you discover your next culinary adventure quickly and effortlessly.</p>
                    <Link to='/signup'><Button>Get Started</Button></Link>
                </Col>
            </Row>
            <Row>
                <Container style={{display:'flex'}}>
                    <Col>
                        <Card>
                            <h3>Restaurant Search</h3>
                            <p>Explore a world of dining options with our easy-to-use restaurant search.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <h3>Food Search</h3>
                            <p>Craving something specific? Find restaurants serving your favorite dishes.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <h3>Favorites</h3>
                            <p>Save and organize your go-to restaurants and must-try meals effortlessly.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <h3>Randomizer</h3>
                            <p>Can't decide? Let Food Genie choose for you and embark on a spontaneous food adventure!</p>
                        </Card>
                    </Col>
                </Container>
            </Row>
            <Row>
                <Container style={{display:'flex'}}>
                    <Col>
                        <blockquote>"Food Genie has transformed my dining experience. I love the randomizer feature!"</blockquote>
                        <p>- Sarah Johnson</p>
                    </Col>
                    <Col>
                        <blockquote>"This app is a game-changer. It saves me so much time, and I've discovered amazing places to eat!"</blockquote>
                        <p>- Michael Smith</p>
                    </Col>
                    <Col>
                        <blockquote>"Food Genie has transformed my dining experience. I love the randomizer feature!"</blockquote>
                        <p>- Johnson Sarah</p>
                    </Col>
                    <Col>
                        <blockquote>"Food Genie has transformed my dining experience. I love the randomizer feature!"</blockquote>
                        <p>- Smith Michael</p>
                    </Col>
                </Container>
            </Row>
        </Container>
    )
}
