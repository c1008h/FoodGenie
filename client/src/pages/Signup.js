import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { authService } from '../utils/auth';
import { Alert } from 'react-bootstrap'
import {SignupForm} from '../components/Signup/SignupForm'

export const Signup = (props) => {
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (username, email, password) => {
    if(!username || !email || !password){
      alert('Failed to submit! Please fill all requested fields.');
      document.location.replace('/');
  }
    // console.log(formState);

    try {
      const { data } = await addUser({
        variables: { username, email, password },
      });

      authService.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>  
    {authService.loggedIn ? (
      <p>
        Success! You may now head{' '}
        <Link to='/'>Back to the homepage.</Link>
      </p>
    ) : (
      <SignupForm onSubmit={handleFormSubmit}/>
    )} 
    {error && (
      <div>
          <Alert severity='error'>
            {error.message}
          </Alert>
      </div>
    )}
    </>
  );
};

export default SignupForm;