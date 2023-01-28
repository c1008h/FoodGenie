import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: 'http://localhost:3005/',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: localStorage.getItem('token') || '',
      },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client;