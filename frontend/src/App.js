import React, { Component } from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

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
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <div className='App'>
                <Header
                    activeItem={activeItem}
                    handleItemClick={this.handleItemClick}
                />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/organization' component={OrganizationPage} />
                    <Route path='/position' component={PositionPage} />
                    <Route path='/job' component={JobPage} />
                    <Route path='/branch' component={BranchPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
