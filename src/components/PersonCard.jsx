import React, { Component } from 'react'

export default class PersonCard extends Component {
    render() {
        return (
            <fieldset>
                <legend>PesonCard.jsx</legend>
                <h1>Fullname: {this.props.lastName}, {this.props.firstName} </h1>
                <h1>Age: {this.props.age} Hair: {this.props.hair}</h1>
            </fieldset>
        )
    }
}
