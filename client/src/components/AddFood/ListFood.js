import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { OneFood } from './OneFood'
import { SAVE_FOOD, REMOVE_FOOD } from '../../utils/mutations';
import { authService } from '../../utils/auth';
import { Button, Card } from 'react-bootstrap';
import { QUERY_ME } from '../../utils/queries';
import { foodById, foodReview } from '../../utils/API';

export const ListFood = (props) => {
    const [show, setShow] = useState({});
    const [id, setId ] = useState({});
    const [reviews, setReviews] = useState({})
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [removeFood] = useMutation(REMOVE_FOOD);

    const { data } = useQuery(QUERY_ME)

    useEffect(() => {
        if (data) {
            console.log(data.me)
            setUserData(data.me.savedFoods)
            setLoading(false)
        }
    }, [data])
    // console.log(props.food)

    const renderButton = (userData, index) => {
        const item = userData.find(item => item.id === index)
        if(item) {
            return <Button type="button" 
            className="btn btn-secondary m-1"
            onClick={() => handleDeleteFood(item.id)}>Remove</Button>
        } else {
            return <Button type="button" 
            className="btn btn-secondary m-1"
            onClick={() => 
            handleSaveFood(item.id, item.foodtype, item.name, item.image_url, item.is_closed, item.url, item.rating, item.price, item.display_phone)}>Save</Button>
        }
    }
    const [saveFood] = useMutation(SAVE_FOOD, {
        update(cache, { data: { saveFood }}) {
            const data = cache.readQuery({ query: QUERY_ME });
            const me = data ? data.me : null;
            if (!me) {
                return;
            }
            
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, savedFoods: [...me.savedFoods, saveFood] } },
            });
        }
    })
    const handleSaveFood = async (id, foodtype, name, image_url, is_closed, url, rating, price, display_phone, distance) => {
        // console.log(props.food.trim())
        const token = authService.loggedIn() ? authService.getToken() : null;
        if(!token) {
            return false
        }
        // console.log(id)
        try {
            await saveFood({ variables: { input: {
                foodId: id,
                foodtype: props.food.trim().charAt(0).toUpperCase() + props.food.trim().slice(1).toLowerCase(),
                name: name,
                image_url: image_url,
                is_closed: is_closed,
                url: url,
                rating: rating,
                price: price,
                display_phone: display_phone,
                // distance: distance
            }}})

            if(saveFood.error) { throw new Error('Something went wrong.')}
        } catch (error) {
            console.error(error)
        }
    }
    const handleClose = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: false }));
    };
    const handleShow = async (id) => {
        setShow((prevState) => ({ ...prevState, [id]: true }));
        // Searching foodId and reviews from API
        const response = await foodById(id)
        const review = await foodReview(id)
        // console.log(response)
        // console.log(review)
        setId(response)
        setReviews(review)

    }
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
    const token = authService.loggedIn() ? authService.getToken() : null;
    if(!token) {
        return <h2>Please login first</h2>
    }
    if(loading) {
        return <h2>LOADING...</h2>
    }
    return (
        <div className='container'>
            <h4><strong>Results for {props.food}:</strong></h4>
            <div className='col-12 row' style={{justifyContent:'center'}}> 
                {props.data.businesses.map((item, index) => (
                    <Card key={index}  className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' id='displayCards'>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Img id='displayImage' src={item.image_url} alt='food' style={{height:'30%'}} />
                        <Card.Body>
                            <p>Rating: {item.rating}</p>
                            <p>Price: {item.price}</p>
                            <p>{item.location.address1}</p>
                            <p>{item.location.city}, {item.location.state}, {item.location.zip_code}, {item.location.country}</p>
                            <Button type="button" 
                            className="btn btn-secondary m-1"
                            onClick={() => handleShow(item.id)}
                            >More Info</Button>
                            {userData && userData.savedFoods && !userData.savedFoods.includes(item.id) ? (
                                <Button type="button" 
                                    className="btn btn-secondary m-1"
                                    onClick={() => handleDeleteFood(item.id)}
                                >Remove</Button> 
                            ): (
                                <Button
                                type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => 
                                handleSaveFood(item.id, item.foodtype, item.name, item.image_url, item.is_closed, item.url, item.rating, item.price, item.display_phone)}>
                            Save</Button>)}
                            {/* {renderButton(userData, item.id)} */}
                            <OneFood 
                                show={show}
                                onHide={() => handleClose(item.id)}
                                onClick={() => handleClose(item.id)}
                                data={item}
                                handleClose={handleClose}
                                id={id}
                                review={reviews}
                                handleSaveFood={handleSaveFood}
                                handleDeleteFood={handleDeleteFood}
                            />
                        </Card.Body>
                    </Card>

                ))}
            
            </div>
        </div>
    )
}