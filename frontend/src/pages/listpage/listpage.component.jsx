import React from 'react';
import {
    Segment,
    Divider,
    Statistic,
    Table,
    Checkbox
} from 'semantic-ui-react';

const ListPage = () => (
    <Segment className='content' color='red'>
        <h1>Employee</h1>
        This is employee list page
        <Divider />
        <Statistic label='Employees' value='7,310' size='small' />
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Employee Name</Table.HeaderCell>
                    <Table.HeaderCell>Position Title</Table.HeaderCell>
                    <Table.HeaderCell>Business Unit</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell collapsing>
                        <Checkbox />
                    </Table.Cell>
                    <Table.Cell>16053406</Table.Cell>
                    <Table.Cell>Raden Muhammad Pradana Ramadista</Table.Cell>
                    <Table.Cell>
                        Organization & Development System Head
                    </Table.Cell>
                    <Table.Cell>HCMG</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing>
                        <Checkbox />
                    </Table.Cell>
                    <Table.Cell>04044547</Table.Cell>
                    <Table.Cell>Kostaman Thayib</Table.Cell>
                    <Table.Cell>President Director</Table.Cell>
                    <Table.Cell>UTA</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Segment>
);

export default ListPage;
