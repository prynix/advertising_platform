import React, { Component } from 'react';
//import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import { Grid, Card, Segment } from 'semantic-ui-react';
import { CampaignForm } from '../../components/CampaignForm';

export class NewCampaign extends Component {
    render() {
        return (
                
                    <CampaignForm />
                
        )
    }
}

