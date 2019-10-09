
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';
import './styles.css';

export class TotalImpressionsNumberCard extends Component {
    render() {
        return (
            <Card className='TotalImpressionsNumberCard' link header='Total Impressions:' meta='3,657,566' />
            )
    }
}

