import React from 'react'
import { Modal, Button, Carousel } from 'react-bootstrap';
import Moment from 'react-moment';
// import { foodById, foodReview } from '../../utils/API';

export const OneFood = ({ data, show, id, review, handleClose, handleSaveFood, savedFoodIds}) => {
    // const [id, setId ] = useState({});
    // const [reviews, setReviews] = useState({})
   
    // useEffect(() => {
    //     let isCancel = false;
    //     const handleShow = async (id) => {
    //         // Searching foodId and reviews from API
    //         const responseId = await foodById(id)
    //         const responseReview = await foodReview(id)
    //         setId(responseId)
    //         setReviews(responseReview)
    //         if (!isCancel) {
    //             console.log('item is changed')
    //         }
    //     }

    //     handleShow()

    //     return () => { isCancel = true}
    // },[show])

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
            <Modal.Body>
                <Carousel fade key={data.photos}>
                    {id?.photos?.map((photos) =>
                        <Carousel.Item >
                        <img src={photos} alt='' className='reviewpics'/>
                        </Carousel.Item>
                    )}

                </Carousel>

                <div key={review.reviews}>
                    {review?.reviews?.map((reviews) =>
                        <div className='reviewBox'>
                            <div className='row'>
                                <img src={reviews.user.image_url} 
                                alt='user pic' 
                                className='reviewerImage'/>
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
            <Button onClick={() => handleClose(id.id)}>Close</Button>
            <Button onClick={() => handleSaveFood(id.id, id.name, id.image_url, id.is_closed, id.url, id.rating, id.price, id.display_phone)}>
                {savedFoodIds?.some((savedFoodId) => savedFoodId === id.id) ?
                'This food has already been saved!':
                'Save'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}