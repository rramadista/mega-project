import React from 'react';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const DirectoryMenuItem = ({ title, history, linkUrl, match }) => (
    <Card
        link
        className='menu-item'
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        header={title.toUpperCase()}
        meta='Item'
    />
);

export default withRouter(DirectoryMenuItem);
