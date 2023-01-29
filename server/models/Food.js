const { Schema, model } = require('mongoose');

const foodSchema = new Schema ({
    foodId: {
        type: String
    },
    name: {
        type: String
    },
    image_url: {
        type: String
    },
    is_closed: {
        type: Boolean,
    },
    url: {
        type: String
    },
    rating: {
        type: Number
    },
    // transaction: {
    //     type: Array
    // },
    price: {
        type: String
    },
    // Double check this one, it's an object
    // location: {
    //     type: Object
    // },
    display_phone: {
        type: String
    },
    distance: {
        type: Number
    }
})

const Food = model('Food', foodSchema);

module.exports = Food;