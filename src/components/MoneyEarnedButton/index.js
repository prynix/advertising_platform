
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';


export class MoneyEarnedButton extends Component {
    render() {
        return (
            <Card link header='Money Earned:' meta='$23,450' />
            )
    }
}

