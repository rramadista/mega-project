import React, { Component } from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    auth,
    createUserProfileDocument
} from './services/firebase/firebase.utils';
import { setCurrentUser } from './services/redux/user/user.actions';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ListPage from './pages/listpage/listpage.component';

const OrganizationPage = () => (
    <Segment className='content' color='red'>
        <h1>Organization</h1>
        This is organizations page
        <Divider />
    </Segment>
);

const PositionPage = () => (
    <Segment className='content' color='red'>
        <h1>Position</h1>
        This is positions page
        <Divider />
    </Segment>
);

const JobPage = () => (
    <Segment className='content' color='red'>
        <h1>Job</h1>
        This is jobs page
        <Divider />
    </Segment>
);

const BranchPage = () => (
    <Segment className='content' color='red'>
        <h1>Branch</h1>
        This is branches page
        <Divider />
    </Segment>
);

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         currentUser: null,
    //         activeItem: 'home'
    //     };
    // }

    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            }
            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { activeItem } = this.state;
        return (
            <div className='App'>
                <Header
                    activeItem={activeItem}
                    handleItemClick={this.handleItemClick}
                    currentUser={this.props.currentUser}
                />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/organization' component={OrganizationPage} />
                    <Route path='/position' component={PositionPage} />
                    <Route path='/job' component={JobPage} />
                    <Route path='/branch' component={BranchPage} />
                    <Route path='/employee' component={ListPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
