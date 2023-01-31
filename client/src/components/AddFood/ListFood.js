import React, { useEffect, useState } from 'react';
import { OneFood } from './OneFood'
import { useMutation } from '@apollo/client';
import { SAVE_FOOD } from '../../utils/mutations';
import { authService } from '../../utils/auth';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { QUERY_ME } from '../../utils/queries';
import { saveFoodIds, getSavedFoodIds } from '../../utils/localStorage';

export const ListFood = (props) => {
    // console.log(props.data.businesses)
    const [show, setShow] = useState({});
    const [id, setId ] = useState({});
    // const [saving, setSave] = useState()
    const [reviews, setReviews] = useState({})
    const [savedFoodIds, setSavedFoodIds] = useState(getSavedFoodIds());

    const [saveFood] = useMutation(SAVE_FOOD, {
        update(cache, { data: { saveFood }}) {
            // const { me } = cache.readQuery({ query: QUERY_ME });
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

    useEffect(() => {
        return () => saveFoodIds([...savedFoodIds, id])
    },)

    const handleSaveFood = async (id, name, image_url, is_closed, url, rating, price, display_phone, distance) => {
        console.log(id)
        // setSave(id)
        // console.log(saving)
        // const foodToSave = searchedFoods.find((food) => food.foodId === foodId)
        const token = authService.loggedIn() ? authService.getToken() : null;
        if(!token) {
            return false
        }
        // console.log(id)
        try {
            await saveFood({ variables: { input: {
                foodId: id,
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

            setSavedFoodIds([...savedFoodIds, id])
        } catch (error) {
            console.error(error)
        }
    }
    const handleClose = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: false }));
    };
    const handleShow = (id) => {

        setShow((prevState) => ({ ...prevState, [id]: true }));

        axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
        
        // Getting more details by searching ID
        axios
        .post("http://localhost:3005/api/food/:id", { 
            id: id
        })
        .then((response) => {
            // console.log(response.data);
            // setSearchMade(true);
            setId(response.data)

        })
        .catch((error) => {
            console.error(error);
        });

        // Get reviews
        axios
        .post("http://localhost:3005/api/food/:id/reviews", { 
            id: id
        })
        .then((response) => {
            console.log(response.data);
            // setSearchMade(true);
            setReviews(response.data)

        })
        .catch((error) => {
            console.error(error);
        });
    }
    return (
        <div>
            <h4><strong>Results:</strong></h4>
            <div className='col-12 row' style={{justifyContent:'center'}}> 
                {props.data.businesses.map((item, index) => (
                    <Card key={index}  className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' style={{margin:'2%'}}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Img src={item.image_url} alt='food' style={{height:'30%'}} />
                        <Card.Body>
                            <p>Rating: {item.rating}</p>
                            <p>Price: {item.price}</p>
                            <p>{item.location.address1}</p>
                            <p>{item.location.city}, {item.location.state}, {item.location.zip_code}, {item.location.country}</p>
                            <Button type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => handleShow(item.id)}
                                >More Info</Button>
                            <Button 
                                type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => handleSaveFood(item.id, item.name, item.image_url, item.is_closed, item.url, item.rating, item.price, item.display_phone, item.distance)}>
                                {savedFoodIds?.some((savedFoodId) => savedFoodId === item.id) ?
                                'This food has already been saved!' :
                                'Save'}</Button>
                            <OneFood 
                                show={show}
                                onHide={() => handleClose(item.id)}
                                onClick={() => handleClose(item.id)}
                                data={item}
                                handleClose={handleClose}
                                id={id}
                                review={reviews}
                                savedFoodIds={savedFoodIds}
                                handleSaveFood={handleSaveFood}
                            />
                        </Card.Body>
                    </Card>

                ))}
            
            </div>
        </div>
    )
}