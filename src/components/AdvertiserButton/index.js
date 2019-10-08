
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';


export class AdvertiserButton extends Component {
    render() {
        return (
            <Card centered link header='Advertiser' meta='Promoted: 78' /> 
            )
    }
}

