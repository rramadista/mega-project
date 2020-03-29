import React, { Component } from 'react';
import DirectoryMenuItem from '../directory-menu-item/directory-menu-item.component';
import { Card } from 'semantic-ui-react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                { id: 1, title: 'organizations', linkUrl: 'organization' },
                { id: 2, title: 'positions', linkUrl: 'position' },
                { id: 3, title: 'jobs', linkUrl: 'job' },
                { id: 4, title: 'branches', linkUrl: 'branch' },
                { id: 5, title: 'offices', linkUrl: 'office' },
                { id: 6, title: 'employees', linkUrl: 'employee' }
            ]
        };
    }
    render() {
        return (
            <div className='directory-menu'>
                <Card.Group itemsPerRow={4}>
                    {this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <DirectoryMenuItem key={id} {...otherSectionProps} />
                    ))}
                </Card.Group>
            </div>
        );
    }
}

export default Directory;
