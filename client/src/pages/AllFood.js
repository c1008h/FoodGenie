import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useQuery, useMutation } from '@apollo/client'
import {REMOVE_FOOD_ITEM } from '../utils/mutations'
import { QUERY_ME } from '../utils/queries'
import { authService } from '../utils/auth'
import FoodCards from '../components/AllFood/FoodCards'
import '../styles/all.css'

export default function AllFood() {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [removeFoodItem, { error }] = useMutation(REMOVE_FOOD_ITEM);
    const { data } = useQuery(QUERY_ME)

    useEffect(() => {
        if (data) {
            setUserData(data.me)
            setLoading(false)
        }
    }, [data])

    console.log(userData.savedFoods)

    const userDataLength = data && data.me ? Object.keys(data.me).length : 0;
    const uniqueFoodTypes = userData.savedFoods && Array.isArray(
        userData.savedFoods)
            ? new Set(userData.savedFoods.map(food => food.foodtype))
            : new Set([]);
    const foodTypesCount = uniqueFoodTypes.size;

    const handleDeleteFoodItem = async (foodtype) => {
        // console.log(foodId)
        const token = authService.loggedIn() ? authService.getToken() : null
        if (!token) {
            return false
        }

        try {
            const updatedData = await removeFoodItem({
                variables: { foodtype: foodtype }
            })
            if(updatedData.error) {
                throw new Error('Something went wrong.')
            }
            setUserData(updatedData.data.removeFood)
        } catch (error) {
            console.error(error)
        }
    }
    const token = authService.loggedIn() ? authService.getToken() : null;

    if(!token) {return <h2>Please login first</h2>}
    if (error) {return <div>Error occurred while fetching data.</div>;}
    if(loading) {return <h2>LOADING...</h2>}

    return (
        <Container className='container'>
            <h4>
                {userDataLength?
                    `Viewing ${foodTypesCount} saved ${foodTypesCount === 1 ? 'food' : 'foods'}`
                    :
                    'You have no saved foods!'
                }
            </h4>
            <FoodCards 
                userData={userData}
                handleDeleteFoodItem={handleDeleteFoodItem}
            />
        </Container>
    )
}