import React from 'react';
import ReactDOM from 'react-dom';

export class Greeeting extends React {
    render() {
        if(this.props.signedIn === false) {
            return <h1>Go Away</h1>
        } else{
            return <h1>Hi there, {this.props.name}</h1>
        }
    }
}