import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

export default class Table extends Component {
    render() {
        return (
            <table>
                <tbody>
                <TableHeader />
                {this.props.contacts.map((tableItem) => (
                    <TableContent key={tableItem.id} item={tableItem} />
                ))}
                </tbody>
            </table>
        )
    }
}
