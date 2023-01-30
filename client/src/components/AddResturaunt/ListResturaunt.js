import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_RESTURAUNT } from '../../utils/mutations';
import { OneResturaunt } from './OneResturaunt'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
// import { authService } from '../../utils/auth';

export const ListResturaunt = (props) => {
    // console.log(props.data.businesses)
    const [show, setShow] = useState({});
    const [id, setId ] = useState({});
    const [reviews, setReviews] = useState({})
    const [saveResturaunt] = useMutation(SAVE_RESTURAUNT)

    const saveItem = async (e) => {
        try {
            await saveResturaunt({
                variables: {
                    resturauntId: id,
                    name: props.data.businesses.name,
                    image_url: props.data.businesses.image_url, 
                    is_closed: props.data.businesses.is_closed, 
                    url: props.data.businesses.url, 
                    rating: props.data.businesses.rating, 
                    price: props.data.businesses.price, 
                    display_phone: props.data.businesses.display_phone, 
                    distance: props.data.businesses.distance 
                }
            })

        } catch (e) {
            console.log(e)
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
        .post("http://localhost:3005/api/resturaunt/:id", { 
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
        .post("http://localhost:3005/api/resturaunt/:id/reviews", { 
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
                            <Button type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => saveItem(item.id)}
                                >Save</Button>
                            <OneResturaunt 
                                show={show}
                                onHide={() => handleClose(item.id)}
                                onClick={() => handleClose(item.id)}
                                data={item}
                                handleClose={handleClose}
                                id={id}
                                review={reviews}
                            />
                        </Card.Body>
                    </Card>

                ))}
            
            </div>
        </div>
    )
}