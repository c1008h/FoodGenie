import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { OneSaved } from './OneSaved'

export default function FoodCards ({userData, handleDeleteFood}) {
    // console.log(userData.savedFoods)

    const [show, setShow] = useState({});
    const handleClose = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: false }));
    };
    const handleShow = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: true }));
    }
    return (
        <div>
            {userData && userData.savedFoods && userData.savedFoods.map((savedFood, index) => ( 
                // <Card key={index} className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' style={{margin:'2%'}}>
                //     <Card.Title>{savedFood.name}</Card.Title>
                //     <Card.Img src={savedFood.image_url} alt='' style={{height:'30%'}}/>
                //     <Card.Body>
                //         <Button onClick={() => handleShow(savedFood.foodId)}>More Info</Button>
                //         <Button onClick={() => handleDeleteFood(savedFood.foodId)}>Delete</Button>
                //         <OneSaved 
                //             show={show}
                //             onHide={() => handleClose(savedFood.foodId)}
                //             onClick={() => handleClose(savedFood.foodId)}
                //             handleClose={handleClose}
                //             savedFood={savedFood}
                //             handleDeleteFood={handleDeleteFood}
                //         />
                //     </Card.Body>
                // </Card>
                <Card key={index} className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' style={{margin:'2%'}}>
                    <Card.Title>{savedFood.foodtype}</Card.Title>
                    <Card.Body>
                        <Button onClick={() => handleShow(savedFood.foodId)}>More Info</Button>
                        <Button onClick={() => handleDeleteFood(savedFood.foodId)}>Delete</Button>
                    </Card.Body>
                </Card>
                ))}
        </div>
    )
}