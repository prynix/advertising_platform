
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';
import './styles.css';


export class TotalClicksCard extends Component {
    render() {
        return (
            <Card className='TotalClicksCard' link header='No. Total Clicks:' meta='900,055' />
            )
    }
}

