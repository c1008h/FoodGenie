import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { authService } from '../utils/auth';
import {LoginForm} from '../components/Login/LoginForm'
import { Alert } from 'react-bootstrap';
import { LOGIN_USER } from '../utils/mutations';

export const Login = (props) => {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (email, password) => {
    if (!email || !password) {
      alert('Failed to submit form! please fill all requested fileds.');
      document.location.replace('/');
    }
    // event.preventDefault();
    try {
      const { data } = await login({
        variables: { 
          email: email.trim(), 
          password: password.trim() 
        },
      });
      authService.login(data.login.token, data.login.user.permission);
      document.location.replace('/');
      //localStorage.setItem('status',data.login.user.permission);
      //Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <> {authService.loggedIn() ? (
      <p>
        Success! You may now head{' '}
        <Link to="/">back to the homepage.</Link>
      </p>
    ) : (
      <LoginForm onSubmit={handleFormSubmit} />
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