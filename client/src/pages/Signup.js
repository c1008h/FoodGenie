import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Button, Alert } from 'react-bootstrap';

const SignupForm = (props) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    if(!formState.name || !formState.email || !formState.password){
      alert('Failed to submit! Please fill all requested fields.');
      document.location.replace('/');
  }
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>  
    {data ? (
      <p>
        Success! You may now head{' '}
        <Link to='/'>Back to the homepage.</Link>
      </p>
    ) : (
      <Form onSubmit={handleFormSubmit}>
      <Form.Group>
        <Form.Label htmlFor='username'>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Your username'
          name='username'
          onChange={handleChange}
          value={formState.username}
          required
        />
        <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Your email address'
          name='email'
          onChange={handleChange}
          value={formState.email}
          required
        />
        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Your password'
          name='password'
          onChange={handleChange}
          value={formState.password}
          required
        />
        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
      </Form.Group>
      <Button
        disabled={!(formState.username && formState.email && formState.password)}
        type='submit'
        variant='success'>
        Submit
      </Button>
    </Form>
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