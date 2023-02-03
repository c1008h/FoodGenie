import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_RESTURAUNT, REMOVE_RESTURAUNT } from '../../utils/mutations';
import { OneResturaunt } from './OneResturaunt'
import { Button, Card } from 'react-bootstrap';
import { resturauntById, resturauntReview } from '../../utils/API';
import { QUERY_ME } from '../../utils/queries';
import { authService } from '../../utils/auth';

export const ListResturaunt = (props) => {
    const [show, setShow] = useState({});
    const [id, setId ] = useState({});
    const [reviews, setReviews] = useState({})
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [removeResturaunt] = useMutation(REMOVE_RESTURAUNT);
    const { data } = useQuery(QUERY_ME)

    useEffect(() => {
        if (data) {
            setUserData(data.me)
            setLoading(false)
        }
    }, [data])

    const [saveResturaunt] = useMutation(SAVE_RESTURAUNT, {
        update(cache, { data: { saveResturaunt }}) {
            const data = cache.readQuery({ query: QUERY_ME });
            const me = data ? data.me : null;
            if (!me) {
                return;
            }
            
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, savedResturaunts: [...me.savedResturaunts, saveResturaunt] } },
            });
        }
    })

    const handleSaveResturaunt = async (id, name, image_url, is_closed, url, rating, price, display_phone, distance) => {
        setId(id)
        const token = authService.loggedIn() ? authService.getToken() : null;
        if(!token) {
            return false
        }

        try {
            await saveResturaunt({ variables: { input: {
                resturauntId: id,
                name: name,
                image_url: image_url,
                is_closed: is_closed,
                url: url,
                rating: rating,
                price: price,
                display_phone: display_phone,
                // distance: id.distance
            } } })

            if(saveResturaunt.error) { throw new Error('Something went wrong.')}

        } catch (error) {
            console.error(error)
        }
    }
    const handleClose = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: false }));
    };

    const handleShow = async (id) => {
        setShow((prevState) => ({ ...prevState, [id]: true }));
        
        // Searching resturaunt details from API
        const response = await resturauntById(id)
        const review = await resturauntReview(id)

        setId(response)
        setReviews(review)
    }
    const handleDeleteFood = async (resturauntId) => {
        const token = authService.loggedIn() ? authService.getToken() : null
        if (!token) {
            return false
        }

        try {
            const updatedData = await removeResturaunt({
                variables: { resturauntId: resturauntId }
            })
            if(updatedData.error) {
                throw new Error('Something went wrong.')
            }
            setUserData(updatedData.data.removeResturaunt)
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
            <h4><strong>Results:</strong></h4>
            <div className='col-12 row' style={{justifyContent:'center'}}> 
                {props.data.businesses.map((item, index) => (
                    <Card key={index} id='displayCards' className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' style={{margin:'2%'}}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Img id='displayImage' src={item.image_url} alt='food'/>
                        <Card.Body>
                            <p>Rating: {item.rating}</p>
                            <p>Price: {item.price}</p>
                            <p>{item.location.address1}</p>
                            <p>{item.location.city}, {item.location.state}, {item.location.zip_code}, {item.location.country}</p>
                            <Button type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => handleShow(item.id)}
                                >More Info</Button>
                            {/* {userData.savedResturaunts.some(resturauntId => resturauntId === item.id) */}
                            {userData.savedResturaunts.includes(item.id)
                                ?
                                <Button type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => handleDeleteFood(item.id)}
                                >Remove</Button> 
                                : 
                            <Button type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => handleSaveResturaunt(item.id, item.name, item.image_url, item.is_closed, item.url, item.rating, item.price, item.display_phone, item.distance)}>
                                Save</Button>}
                            <OneResturaunt 
                                show={show}
                                onHide={() => handleClose(item.id)}
                                onClick={() => handleClose(item.id)}
                                data={item}
                                handleClose={handleClose}
                                id={id}
                                review={reviews}
                                handleSaveResturaunt={handleSaveResturaunt}
                                handleDeleteFood={handleDeleteFood}
                            />
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}