const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
      me: async (parent, args, context) => {
        console.log(context.user)
        if(context.user) {
            return User.findOne({ _id: context.user._id })
        }
        throw new AuthenticationError('You need to be logged in!')
      },
    },
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);

        return { token, user}
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        
        const token = signToken(user);
        return { token, user };
      },
      saveFood: async (parent, { foodId, name, photos, category, url, distance }, context) => {
        if (context.user) {

          const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { 
              saveFoods: {
                foodId, name, photos, category, url, distance
              }} },
            { new: true, runValidators: true }
          )
          return user;
        }
        throw new AuthenticationError ('You need to be logged in.');
      },
      removeFood: async (parent, {foodId } , context) => {
        if (context.user) {
          
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { savedFoods: { foodId }} },
            {new: true}
          )
          return updatedUser;
        }
        throw new AuthenticationError ('You need to be logged in.');

      }
    }
}
module.exports = resolvers;
