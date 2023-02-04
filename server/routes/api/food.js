const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config({path: __dirname+'../../../env'});
const BANANA = process.env.BEARER_TOKEN || BEARER_TOKEN
// const cancelToken = axios.cancelToken.source();

router.post("/", (req, res) => {
    const { userFood, userLocation } = req.body;
    // console.log(userFood)
    axios
    .get('https://api.yelp.com/v3/businesses/search', {
      // cancelToken.cancelToken.token,
      headers: {
        'Authorization': `Bearer ${BANANA}`
      },
      params: {
        location: userLocation, 
        term: userFood, 
        sort_by: 'best_match', 
        limit: 20},
    })
    .then((response) => {
      // console.log(res.data)
      res.send(response.data)
  
    })
    .catch((error) => {
      // if(axios.isCancel(err)){
      //   console.log('cancelled')
      // } else {
      console.log(error)
    })
});

router.post("/:id", (req, res) => {
    const { id } = req.body;
    // console.log(id)
  
    axios
    .get(`https://api.yelp.com/v3/businesses/${id}`, {
      headers: {
        'Authorization': `Bearer ${BANANA}`
      },
      params: {
        business_id_or_alias:id
      }
    })
    .then((response) => {
      // console.log(response.data)
      res.send(response.data)
  
    })
    .catch((error) => {
      console.log(error)
    })
});

router.post("/:id/reviews", (req, res) => {
    const { id } = req.body;
    // console.log(id)
  
    axios
    .get(`https://api.yelp.com/v3/businesses/${id}/reviews`, {
      headers: {
        'Authorization': `Bearer ${BANANA}`
      },
      params: {
        business_id_or_alias:id
      }
    })
    .then((response) => {
      console.log(response.data)
      res.send(response.data)
  
    })
    .catch((error) => {
      console.log(error)
    })
});

module.exports = router;
