import React from 'react';
import { Menu, Input, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = props => (
    <div className='header'>
        <Menu secondary stackable>
            <Menu.Item header>BANK MEGA</Menu.Item>
            <Menu.Item
                as={Link}
                to='/'
                name='home'
                active={props.activeItem === 'home'}
                onClick={props.handleItemClick}
            />
            <Menu.Item
                name='menu1'
                active={props.activeItem === 'menu1'}
                onClick={props.handleItemClick}
            />
            <Menu.Item
                name='menu2'
                active={props.activeItem === 'menu2'}
                onClick={props.handleItemClick}
            />
            <Menu.Item
                name='menu3'
                active={props.activeItem === 'menu3'}
                onClick={props.handleItemClick}
            />
            <Dropdown item text='Categories'>
                <Dropdown.Menu>
                    <Dropdown.Item>Organization</Dropdown.Item>
                    <Dropdown.Item>Position</Dropdown.Item>
                    <Dropdown.Item>Job</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                    name='logout'
                    active={props.activeItem === 'logout'}
                    onClick={props.handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    </div>
);

export default Header;
