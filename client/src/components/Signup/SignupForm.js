import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const SignupForm = ({onSubmit}) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password)
        console.log(confirmpassword)
        if(confirmpassword === password) {

        onSubmit(username, email, password);
        setUsername('')
        setEmail('')
        setPassword('')
      } else {
        alert('Confirm password is not the same as password!')
        setPassword('')
        setConfirmPassword('')
      }
    };

    return(
        <Form onSubmit={handleSubmit} style={{padding:'15%', justifyContent:'center'}}>
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
        <Form.Group>
          <Form.Label htmlFor='password2'>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            name='confirmpassword'
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmpassword}
            required
          />
          <Form.Control.Feedback type='invalid'>Confirm your password!</Form.Control.Feedback>
        </Form.Group>
        <Button style={{margin:'5%', justifyContent:'center', textAlign:'center'}}
          disabled={!(username && email && password && confirmpassword)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    )
}