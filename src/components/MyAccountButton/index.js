
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';


export class MyAccountButton extends Component {
    render() {
        return (
            <Card className='MyAccountButton' link header='My Account' />
            )
    }
}

