import React, {useState, useEffect} from "react";
import {authService} from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { Button } from "react-bootstrap";
import { RandomFood } from '../components/Homepage/RandomFood';
import { RandomResturaunt } from '../components/Homepage/RandomResturaunt'
import NotLoggedIn from '../components/Homepage/NotLoggedIn'

export default function Homepage() {
    const [ isFood, setIsFood ] = useState(false)
    const [ isRestaurant, setIsRestaurant ] = useState(false)
    const [userData, setUserData] = useState({})
    const [userSavedFoods, setSavedFoods] = useState({})
    const [userSavedResturants, setSavedResturants] = useState({})
    const { data } = useQuery(QUERY_ME)

    useEffect(() => {
        if (data) {
            setUserData(data.me)
            setSavedFoods(userData.savedFoods)
            setSavedResturants(userData.savedResturaunts)
        }
    }, [data, userData])

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
                <div style={{justifyContent:'center', textAlign:'center', marginTop:'5%'}}>
                    <h4>What choice would you like...</h4>
                    <Button style={{margin:'2%'}} id='resturauntBtn' onClick={handleRestaurantClick}>Resturaunt?</Button>
                    <Button id='foodBtn'style={{margin:'2%'}} onClick={handleFoodClick}>Food?</Button>
                    <div style={{marginTop:'15%'}}>
                        {isFood ?
                            <RandomFood userSavedFoods={userSavedFoods}/> 
                        : isRestaurant ?
                            <RandomResturaunt userSavedResturants={userSavedResturants}/> 
                        : null
                        }
                    </div>
                </div>
            ):(
                <NotLoggedIn/>
            )}
        
        </>
    )
}
