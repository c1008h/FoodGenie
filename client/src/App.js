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
import { Login } from './pages/Login'
import { Signup } from './pages/Signup';
import AddFood from './pages/AddFood'
import AddResturaunt from './pages/AddResturaunt'
import AllFood from './pages/AllFood'
import OneFood from './pages/OneFood'
import AllResturaunt from './pages/AllResturaunt';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Error from './pages/Error'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: 'http://localhost:3006/graphql' || 
    'https://foodgenie-ch.herokuapp.com/graphql'
    // uri:'/graphql'
});

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
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
                        element={<Login />} 
                    />
                    <Route 
                        path="/signup" 
                        element={<Signup />} 
                    />
                    <Route 
                        path='/allfoods' 
                        element={<AllFood/>}
                    />
                    <Route
                        path='onefood'
                        element={<OneFood/>}
                    />
                    <Route 
                        path='/allresturaunts' 
                        element={<AllResturaunt/>}
                    />
                    <Route 
                        path='/addfood' 
                        element={<AddFood/>}
                    />
                    <Route 
                        path='/addresturaunt' 
                        element={<AddResturaunt/>}
                    />
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