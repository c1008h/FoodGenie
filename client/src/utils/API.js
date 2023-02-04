import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
// const cancelToken = axios.cancelToken.source()

// Search by food
export const searchFood = (userFood, userLocation) => {
    return axios
        .post("http://localhost:3006/api/food", { 
            userFood: userFood.trim(), 
            userLocation: userLocation.trim()
        })
        .then((response) => {
            console.log(response.data);
            return response.data
        })
        .catch((error) => {
            console.error(error);
        });
};

// Search food by ID
export const foodById = (id) => {
    return axios
    .post("http://localhost:3006/api/food/:id", { 
        id: id
    })
    .then((response) => {
        console.log(response.data);
        return response.data

    })
    .catch((error) => {
        console.error(error);
    });
};

// Get reviews for food id
export const foodReview = (id) => {
    return axios
    .post("http://localhost:3006/api/food/:id/reviews", { 
        id: id
    })
    .then((response) => {
        console.log(response.data);
        return response.data

    })
    .catch((error) => {
        console.error(error);
    });
};

// Search by resturaunt
export const searchResturaunt = (userResturaunt, userLocation) => {
    return axios
        .post("http://localhost:3006/api/resturaunt", { 
            userResturaunt: userResturaunt.trim(), 
            userLocation: userLocation.trim()
        })
        .then((response) => {
            console.log(response.data);
            return response.data
        })
        .catch((error) => {
            console.error(error);
        });
};

// Search resturaunt by ID
export const resturauntById = (id) => {
    return axios
    .post("http://localhost:3006/api/resturaunt/:id", { 
        id: id
    })
    .then((response) => {
        console.log(response.data);
        return response.data

    })
    .catch((error) => {
        console.error(error);
    });
};

// Get reviews for resturaunt id
export const resturauntReview = (id) => {
    return axios
    .post("http://localhost:3006/api/resturaunt/:id/reviews", { 
        id: id
    })
    .then((response) => {
        console.log(response.data);
        return response.data

    })
    .catch((error) => {
        console.error(error);
    });
};

