import React, { Component } from 'react'

export default class TableHeader extends Component {
    render() {
        return (
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Age</th>
                <th>Telephone</th>
            </tr>
        )
    }
}
