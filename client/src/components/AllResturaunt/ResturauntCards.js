import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { OneSaved } from '../AllResturaunt/OneSaved'

export default function ResturauntCards ({userData, handleDeleteResturaunt}) {
    console.log(userData.savedResturaunts)

    const [show, setShow] = useState({});
    const handleClose = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: false }));
    };
    const handleShow = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: true }));
    }
    return (
        <div>
            {userData && userData.savedResturaunts && userData.savedResturaunts.map((savedResturaunt, index) => ( 
                <Card key={index} className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' style={{margin:'2%'}}>
                    <Card.Title>{savedResturaunt.name}</Card.Title>
                    <Card.Img src={savedResturaunt.image_url} alt='' style={{height:'30%'}}/>
                    <Card.Body>
                        <Button onClick={() => handleShow(savedResturaunt.resturauntId)}>More Info</Button>
                        <Button onClick={() => handleDeleteResturaunt(savedResturaunt.resturauntId)}>Delete</Button>
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