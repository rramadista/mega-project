import React, { Component } from 'react';
import { Form, Button, Segment, Divider, Icon } from 'semantic-ui-react';
import { auth, signInWithGoogle } from '../../utils/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <Segment color='blue'>
                    <h2 className='title'>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <Divider hidden />
                    <Form className='sign-in-form' onSubmit={this.handleSubmit}>
                        <Form.Input
                            fluid
                            icon='envelope'
                            iconPosition='left'
                            placeholder='E-mail Address'
                            type='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <Button.Group>
                            <Button type='submit'>Sign In</Button>
                            <Button.Or />
                            <Button
                                type='submit'
                                onClick={signInWithGoogle}
                                primary
                            >
                                <Icon name='google' />
                                Sign In with Google
                            </Button>
                        </Button.Group>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default SignIn;
