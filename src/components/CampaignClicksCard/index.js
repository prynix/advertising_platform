import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';
import './styles.css';

export const CampaignClicksCard = (props) => (
    <Card className='campaignClicksCard'>
        <Card.Content>
            Campaign Clicks For Campaign <h1 style={{ color: 'blue' }}> 90,240</h1>
        </Card.Content>
    </Card>
)


