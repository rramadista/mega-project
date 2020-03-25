import React from 'react';
import Directory from '../../components/directory/directory.component';
import { Segment } from 'semantic-ui-react';

const HomePage = () => (
    <Segment className='homepage' basic>
        <Directory />
    </Segment>
);

export default HomePage;
