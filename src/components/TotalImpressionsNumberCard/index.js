
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';


export class TotalImpressionsNumberCard extends Component {
    render() {
        return (
            <Card link header='No. Total Impressions:' meta='3,657,566' />
            )
    }
}

