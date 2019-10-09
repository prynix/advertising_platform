
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';
import './styles.css';

export class WithdrawFundsCard extends Component {
    render() {
        return (
            <Card className='WithdrawFunds' link header='Withdraw Funds'  />
            )
    }
}

