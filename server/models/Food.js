const { Schema } = require('mongoose');

const foodSchema = new Schema ({
    foodId: {
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true
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
        // type: Schema.Types.Decimal128
        type: String
    }
})

module.exports = foodSchema;