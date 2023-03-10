const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config({path: __dirname+'../../../env'});
const BANANA = process.env.BEARER_TOKEN || BEARER_TOKEN

router.post("/", (req, res) => {
    const { userResturaunt, userLocation } = req.body;
    // console.log(userResturaunt)
    axios
    .get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        'Authorization': `Bearer ${BANANA}`
      },
      params: {
        location: userLocation, 
        term: userResturaunt, 
        sort_by: 'best_match', 
        limit: 20},
    })
    .then((response) => {
      // console.log(res.data.businesses)
      res.send(response.data)
  
    })
    .catch((error) => {
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
