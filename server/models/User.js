const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Food.js
const foodSchema = require('./Food');
const resturauntSchema = require('./Resturaunts')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    // set savedFoods to be an array of data that adheres to the foodSchema
    savedFoods: [foodSchema],
    savedResturaunts: [resturauntSchema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `foodCount` with the number of saved foods we have
// userSchema.virtual('foodCount').get(function () {
//   return this.savedFoods.length;
// });

const User = model('User', userSchema);

module.exports = User;