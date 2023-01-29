const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedSets` array in User.js
const resturauntSchema = new Schema(
  {
  
    name: String
   
  }
);


const Resturaunts = model('Resturaunts', resturauntSchema);

module.exports = Resturaunts;