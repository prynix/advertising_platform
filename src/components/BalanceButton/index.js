
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';


export class BalanceButton extends Component {
    render() {
        return (
            <Card link header='Balance' meta='$5,567' />
            )
    }
}

