import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const SignupForm = ({onSubmit}) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username, email, password);
        setUsername('')
        setEmail('')
        setPassword('')
    };

    return(
        <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={e => setUsername(e.target.value)}
            value={username}
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
            onChange={e => setEmail(e.target.value)}
            value={email}
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
            onChange={e => setPassword(e.target.value)}
            value={password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(username && email && password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    )
}