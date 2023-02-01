import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
// import Carousel from 'react-bootstrap/Carousel';
// import Moment from 'react-moment';

export const OneSaved = ({savedFood, show, handleDeleteFood, handleClose}) => {
    // console.log(data)
    // console.log(id)
    // console.log(review.reviews);
  
    return (
        <Modal
            {...savedFood}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            key={savedFood.foodId}
            show={show[savedFood.foodId]}
            onHide={() => handleClose(savedFood.foodId)}
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {savedFood.name}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <Carousel fade key={id.photos}>
                    {id?.photos?.map((photos) =>
                        <Carousel.Item >
                        <img src={photos} alt='' />
                        </Carousel.Item>
                    )}

                </Carousel> */}

                {/* <div key={review.reviews}>
                    {review?.reviews?.map((reviews) =>
                        <div>
                            <div className='row'>
                                <img src={reviews.user.image_url} 
                                alt='user pic' 
                                style={{height:'100px', width:'100px', borderRadius:'50%'}}/>
                                <div className='col-9'>
                                    <p >{reviews.text}</p>
                                    <Moment format="MM/DD/YYYY">{reviews.time_created}</Moment>

                                </div>
                            </div>
                            <div className='row'>
                                <p className='col-3'>- {reviews.user.name}</p>
                                <p className='col-3'>Rating: {reviews.rating}</p>
                            </div>
                        </div>
                    )}

                </div> */}
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={() => handleClose(savedFood.foodId)}>Close</Button>
            <Button onClick={() => handleDeleteFood(savedFood.foodId)}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}