import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/Homepage'
import LoginForm from './pages/Login'
import { Signup } from './pages/Signup';
// import AllFood from './pages/AllFood'
import AddFood from './pages/AddFood'

import Navbar from './components/Nav';
import Footer from './components/Footer';
import Error from './pages/Error'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: 'http://localhost:3005/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default function App() {

    return (
        <ApolloProvider client={client}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route 
                        path='/' 
                        index element={<Homepage/>}
                    />
                    <Route 
                        path="/login" 
                        element={<LoginForm />} 
                    />
                    <Route 
                        path="/signup" 
                        element={<Signup />} 
                    />
                    {/* <Route 
                        path='/allfoods' 
                        element={<AllFood/>}
                    /> */}
                    {/* <Route 
                        path='/allfood' 
                        element={<All/>}
                    /> */}
                    <Route 
                        path='/addfood' 
                        element={<AddFood/>}
                    />
                    {/* <Route 
                        path='/addresturaunt' 
                        element={<AddResturaunt/>}
                    /> */}
                    <Route 
                        path='*' 
                        element={<Error/>}
                    />
                </Routes>
                <Footer />
            </Router>
        </ApolloProvider>
    )
}