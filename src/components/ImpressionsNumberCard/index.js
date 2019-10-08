import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';
import './styles.css';

export const ImpressionsNumberCard = (props) => (
    <Card className='impressionsNumberCard'>
        <Card.Content>
            No. Of Impressions Of Campaign <h1 style={{ color: 'red' }}> 190,240</h1>
        </Card.Content>
    </Card>
)


