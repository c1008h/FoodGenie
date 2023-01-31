import React, {useState} from "react";
import {authService} from '../utils/auth';

import { RandomFood } from '../components/Homepage/RandomFood';
import { RandomResturaunt } from '../components/Homepage/RandomResturaunt'


export default function Homepage() {
    const [ isFood, setIsFood ] = useState(false)
    const [ isRestaurant, setIsRestaurant ] = useState(false)

    
    const handleFoodClick = () => {
        setIsFood(!isFood);
        setIsRestaurant(false);
    };
    
    const handleRestaurantClick = () => {
        setIsRestaurant(!isRestaurant);
        setIsFood(false);
    };

    return (
        <>
            {authService.loggedIn() ? (
                <>
                    <h4>What choice would you like?</h4>
                    <button id='resturauntBtn' onClick={handleRestaurantClick}>Resturaunt?</button>
                    <button id='foodBtn' onClick={handleFoodClick}>Food?</button>
                    {isFood ?
                        <RandomFood /> 
                    : isRestaurant ?
                        <RandomResturaunt /> 
                    : null
                    }
                </>
            ):(
                <>
                <h2>Welcome to the food Genie!</h2>
                </>
            )}
        
        </>
    )
}
