
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';


export class StopCampaignButton extends Component {
    render() {
        return (
            <Button size='big' className='stopCampaignButtonStyle' color='red'>
                Stop Campaign
            </Button>
        )
    }
}

