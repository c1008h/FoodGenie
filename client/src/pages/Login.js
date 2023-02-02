import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { authService } from '../utils/auth';
import { LoginForm } from '../components/Login/LoginForm'
import { Alert } from 'react-bootstrap';
import { LOGIN_USER } from '../utils/mutations';

export const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleSubmit = (e) => {
      const { name, value } = e.target;

      setFormState({
          ...formState,
          [name]: value,
      });
  };

  // submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);

    if (!formState.email || !formState.password) {
      alert('Failed to submit form! Please fill all requested fields.');
      document.location.replace('/');
    }

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      authService.login(data.login.token)

    } catch (e) {
      console.log(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  
  return (
    <> {authService.loggedIn() ? (
      <p>
        Success! You may now head{' '}
        <Link to="/">back to the homepage.</Link>
      </p>
    ) : (
      <LoginForm 
        onSubmit={handleFormSubmit} 
        handleSubmit={handleSubmit} 
        handleFormSubmit={handleFormSubmit}
        formState={formState}
      />
    )}
      
      
      {error && (
        <Alert severity='error'>
          {error.message}
        </Alert>       
      )}
    </>
  );
};

export default LoginForm;