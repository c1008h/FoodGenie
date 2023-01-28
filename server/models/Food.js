const { Schema, model } = require('mongoose');

const foodSchema = new Schema ({
   category: {
       type: String
   },
   distance: {
       type: String
   },
   foodId: {
       type: String,
   },
   name: {
       type: String,
   },
   photos: {
       type: String,
   },
   url: {
       type: String
   },
//    _id: false
})

const Food = model('Food', foodSchema);

module.exports = Food;