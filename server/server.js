const express = require('express');
const path = require('path');
const cors = require('cors')
const axios = require('axios');

require('dotenv').config({path: __dirname+'/../.env'});

const BANANA = process.env.BEARER_TOKEN

// Importing ApolloServer
const { ApolloServer } = require('apollo-server-express');

const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3005;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});


app.post("/api/food", (req, res) => {
  const { userFood, userLocation } = req.body;
  // console.log(userFood)
  axios
  .get('https://api.yelp.com/v3/businesses/search', {
    headers: {
      'Authorization': `Bearer ${BANANA}`
    },
    params: {
      location: userLocation, 
      term: userFood, 
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

app.post("/api/food/:id", (req, res) => {
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

app.post("/api/food/:id/reviews", (req, res) => {
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

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
  
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);