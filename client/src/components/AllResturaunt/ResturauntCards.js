import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { OneSaved } from './OneSaved'
import { authService } from '../../utils/auth';

export default function ResturauntCards ({userData, handleDeleteResturaunt}) {
    const [show, setShow] = useState({});
    const handleClose = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: false }));
    };
    const handleShow = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: true }));
    }
    const token = authService.loggedIn() ? authService.getToken() : null;
    if(!token) {
        return <h2>Please login first</h2>
    }
    return (
        <div>
            {userData && userData.savedResturaunts && userData.savedResturaunts.map((savedResturaunt, index) => ( 
                <Card id='allcards' key={index} className='card col-xl-3 col-md-5 col-sm-8 col-xs-12'>
                    <Card.Title>{savedResturaunt.name}</Card.Title>
                    <Card.Img src={savedResturaunt.image_url} alt='' style={{height:'30%'}}/>
                    <Card.Body id='cardbody'>
                        <Button className='btns' onClick={() => handleShow(savedResturaunt.resturauntId)}>More Info</Button>
                        <Button className='btns' onClick={() => handleDeleteResturaunt(savedResturaunt.resturauntId)}>Delete</Button>
                        <OneSaved 
                            show={show}
                            onHide={() => handleClose(savedResturaunt.resturauntId)}
                            onClick={() => handleClose(savedResturaunt.resturauntId)}
                            handleClose={handleClose}
                            savedResturaunt={savedResturaunt}
                            handleDeleteResturaunt={handleDeleteResturaunt}
                        />
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}