import React, { Component } from 'react'

export default class UserCard extends Component {
    
    render() {
        return (
            <fieldset>
                <legend>UserCard.jsx</legend>
                <h1>Full Name: {this.props.firstName} {this.props.lastName}</h1>
                <h1>Age: {this.props.age}  </h1>
            </fieldset>   
        )
    }
}
