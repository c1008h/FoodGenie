import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import Moment from 'react-moment';

export const OneResturaunt = ({data, show, handleClose, id, review, handleSaveResturaunt, savedResturauntIds, handleDeleteFood}) => {
    // console.log(data)
    // console.log(id)
    // console.log(review.reviews);
  
    return (
        <Modal
            {...data}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            key={data.id}
            show={show[data.id]}
            onHide={() => handleClose(data.id)}
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {data.name}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Carousel fade key={id.photos}>
                    {id?.photos?.map((photos) =>
                        <Carousel.Item>
                        <img src={photos} className='reviewpics' alt='' />
                        </Carousel.Item>
                    )}

                </Carousel>

                <div key={review.reviews}>
                    {review?.reviews?.map((reviews) =>
                        <div className='reviewBox'>
                            <div className='row'>
                                <img 
                                className='reviewerImage'
                                src={reviews.user.image_url} 
                                alt='user pic' />
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

                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={() => handleClose(data.id)}>Close</Button>
            {savedResturauntIds?.some((savedResturauntId) => savedResturauntId === data.id) ?
                <Button type="button" 
                className="btn btn-secondary m-1"
                onClick={() => handleDeleteFood(savedResturauntIds)}
                >Remove</Button> 
            : 
                <Button type="button" 
                className="btn btn-secondary m-1"
                onClick={() => handleSaveResturaunt(data.id, data.name, data.image_url, data.is_closed, data.url, data.rating, data.price, data.display_phone, data.distance)}>
                Save</Button>
            }
            </Modal.Footer>
        </Modal>
    )
}