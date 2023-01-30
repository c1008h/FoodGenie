import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useQuery, useMutation } from '@apollo/client'
import { REMOVE_FOOD } from '../utils/mutations'
import { QUERY_ME } from '../utils/queries'
import { authService } from '../utils/auth'
import { removeFoodId } from '../utils/localStorage'
import FoodCards from '../components/AllFood/FoodCards'

export default function AllFood() {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [removeFood, { error }] = useMutation(REMOVE_FOOD);

    const { data } = useQuery(QUERY_ME)
        // onCompleted: () => {
        //     if (!data) {
        //         return <div>No data available.</div>;
        //     } 
        //     setUserData(data.me) 
        //     if(data){
        //         setLoading(false)
        //     }
        // }
    useEffect(() => {
        if (data) {
            setUserData(data.me)
            setLoading(false)
        }
    }, [data])
    
    console.log(data)
    const userDataLength = data && data.me ? Object.keys(data.me).length : 0;

    const handleDeleteFood = async (foodId) => {
        const token = authService.loggedIn() ? authService.getToken() : null
        if (!token) {
            return false
        }

        try {
            const updatedData = await removeFood({
                variables: { foodId: foodId}
            })
            if(error) {
                throw new Error('Something went wrong.')
            }
            setUserData(updatedData.data.removeFood)
            removeFoodId(foodId)
        } catch (error) {
            console.error(error)
        }
    }
    const token = authService.loggedIn() ? authService.getToken() : null;

    if(!token) {
        return <h2>Please login first</h2>
    }
    if (error) {
        return <div>Error occurred while fetching data.</div>;
    }
    if(loading) {
        return <h2>LOADING...</h2>
    }

    return (
        <Container>
            <h4>
                {userDataLength?
                    `Viewing ${userData.savedFoods ? data.me.savedFoods.length : 0} saved ${data.me.savedFoods && data.me.savedFoods.length === 1 ? 'food' : 'foods'}`
                    :
                    'You have no saved foods!'
                }
            </h4>
            <FoodCards 
                userData={userData}
                handleDeleteFood={handleDeleteFood}
            />
        </Container>
    )
}