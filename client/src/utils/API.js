import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    params: {
        sort_by: 'best_match', 
        limit: '20'},
    headers: {
        accept: 'application/json',
        Authorization: process.env.BEARER_TOKEN
    }
};
    
axios
.request(options)
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.error(error);
});




