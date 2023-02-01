import React, {useState, useEffect} from 'react';
import { Container, Card } from 'react-bootstrap';

export default function NotLoggedIn() {

    return (
        <Container style={{justifyContent:'center', textAlign:'center', marginTop:'2%'}}>
            <h2>Welcome to the food Genie!</h2>
            <p>The food genie is the solution to your daily food decision dilemma. 
                Say goodbye to the time and energy wasted on choosing what to eat. 
                With this app, you can save all your favorite foods and restaurants in one place, and let the genie do the work for you. 
                Simply press the "food" or "resturaunt" button and the genie will randomly select a resturaunt or a meal for you from your saved options. 
                No more indecision or boring meals. 
                Create a account now and start enjoying effortless meal choices today!
            </p>
            <div className='row' style={{justifyContent:'center'}}>
                <div className='col-3 mx-1'>
                    <Card>
                        <Card.Title>Up to 3 wishes per day!</Card.Title>
                    </Card>
                </div>
                <div className='col-3 mx-1'>                
                    <Card>
                    <Card.Title>Search and view information about resturaunts!</Card.Title>
                    </Card>
                </div>
                <div className='col-3 mx-1'>
                    <Card>
                        <Card.Title>Save time!</Card.Title>
                    </Card>
                </div>
            </div>
        </Container>
    )
}
