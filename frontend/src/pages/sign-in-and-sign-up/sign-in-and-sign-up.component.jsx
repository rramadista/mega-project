import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import { Grid } from 'semantic-ui-react';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <Grid
            columns={2}
            stackable
            textAlign='center'
            style={{ height: '90vh' }}
            verticalAlign='middle'
        >
            <Grid.Column style={{ maxWidth: 500 }}>
                <SignIn />
            </Grid.Column>
            <Grid.Column style={{ maxWidth: 500 }}>
                <SignUp />
            </Grid.Column>
        </Grid>
    </div>
);

export default SignInAndSignUpPage;
