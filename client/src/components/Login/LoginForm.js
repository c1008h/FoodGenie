import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';

export const LoginForm = ({onSubmit}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email, password);
        setEmail('')
        setPassword('')
    };

    return (
        <Form onSubmit={handleSubmit}>
        {/* <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        Something went wrong with your login credentials!
        </Alert> */}
        <Form.Group>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control
            type='email'
            placeholder='Your email'
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
        disabled={!(email && password)}
        type='submit'
        variant='success'>
        Submit
        </Button>
        </Form>
    )
}