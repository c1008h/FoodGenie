import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { authService } from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client'
import { REMOVE_FOOD } from '../utils/mutations'
import { QUERY_ME } from '../utils/queries'

export default function OneFood() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const foodtype = queryParams.get("foodtype");
    
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [removeFood, { error }] = useMutation(REMOVE_FOOD);
    const { data } = useQuery(QUERY_ME)
    useEffect(() => {
        if (data) {
            setUserData(data.me)
            setLoading(false)
        }
    }, [data])

    console.log(userData.savedFoods)

    const handleDeleteFood = async (foodId) => {
        const token = authService.loggedIn() ? authService.getToken() : null
        if (!token) {
            return false
        }

        try {
            const updatedData = await removeFood({
                variables: { foodId: foodId }
            })
            if(updatedData.error) {
                throw new Error('Something went wrong.')
            }
            setUserData(updatedData.data.removeFood)
        } catch (error) {
            console.error(error)
        }
    }
    const filterfood = userData.savedFoods ? userData.savedFoods.filter(food => food.foodtype === foodtype) : [];

    const token = authService.loggedIn() ? authService.getToken() : null;

    if(!token) {
        return <h2>Please login first</h2>
    }

    return (
        <Container>
            <h4>Resturaunts that you saved that serve {foodtype}</h4>
            {loading ? (
                <h2>Loading...</h2>
                )  : (
                <div>
                    {filterfood.map((food, index) => (
                    <Card key={index}>
                        <Card.Body>
                            <Card.Title>{food.name}</Card.Title>
                            <Card.Img src={food.img_url} />
                            <p>{food.is_closed ? 'Closed' : 'Open'}</p>
                            <Button as={Link} to={{pathname:'/allfoods'}}>Back</Button>
                            <Button onClick={() => handleDeleteFood(food)}>Remove</Button>
                        </Card.Body>
                    </Card>
                    ))}
                </div>
            )}
        </Container>
    )
}

