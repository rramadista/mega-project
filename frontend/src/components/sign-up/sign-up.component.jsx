import React, { Component } from 'react';
import { Segment, Divider, Form, Checkbox, Button } from 'semantic-ui-react';
import {
    auth,
    createUserProfileDocument
} from '../../services/firebase/firebase.utils';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <Segment color='green'>
                    <h2 className='title'>I do not have an account</h2>
                    <span>Sign up with your email and password</span>
                    <Divider hidden />
                    <Form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='Display Name'
                            name='displayName'
                            value={displayName}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            fluid
                            icon='envelope'
                            iconPosition='left'
                            placeholder='E-mail Address'
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Confirm Password'
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                        />
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Sign Up</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default SignUp;
