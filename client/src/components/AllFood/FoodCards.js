import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import { authService } from '../../utils/auth';

export default function FoodCards ({userData, handleDeleteFoodItem}) {
    const token = authService.loggedIn() ? authService.getToken() : null;
    if(!token) {
        return <h2>Please login first</h2>
    }
    
    const foodtypes = new Set(userData.savedFoods.map(savedFood => savedFood.foodtype));
    const uniqueFoodtypes = Array.from(foodtypes);

    return (
        <div>
            {uniqueFoodtypes.map((foodtype, index) => {
                const foodId = userData.savedFoods.find(savedFood => savedFood.foodtype === foodtype).foodId;
                return (
                    <Card id='allcards' key={index} className='card col-xl-3 col-md-5 col-sm-8 col-xs-12'>
                    <Card.Title style={{textAlign:'center'}}>{foodtype}</Card.Title>
                    <Card.Body id='cardbody'>
                        <Button className='btns'
                        as={Link} 
                        to={{
                            pathname:'/onefood',
                            search: `?foodtype=${foodtype}`
                        }}>Served At</Button>
                        <Button className='btns' onClick={() => handleDeleteFoodItem(foodtype)}>Remove</Button>
                    </Card.Body>
                </Card>
                )
            })}
        </div>
    )
}