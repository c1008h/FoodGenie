const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedSets` array in User.js
const resturauntSchema = new Schema({
    resturauntId: {
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
    //     type: [Array]
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
});


const Resturaunts = model('Resturaunts', resturauntSchema);

module.exports = Resturaunts;