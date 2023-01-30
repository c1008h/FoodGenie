import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function FoodCards ({userData, handleDeleteFood}) {
    console.log(userData)

    return (
        <div>
            {userData && userData.savedFood && userData.savedFood.map((savedFood, index) => ( 
                <Card key={index}>
                    <Card.Title>{savedFood.name}</Card.Title>
                    <Button>More Info</Button>
                    <Button onClick={() => handleDeleteFood(savedFood.id)}>Delete</Button>
                </Card>
            ))}
        </div>
    )
}