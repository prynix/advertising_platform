import React from 'react';
// import 'semantic-ui-css/semantic.min.css';
import { Card, Image, Button } from 'semantic-ui-react';
import IntelLogo from '../../assets/intel.png';
import './styles.css';

export const BidCardItem = (props) => (
    <Card className='bidCardItem'>
        <Card.Content>
            <Image
                floated='left'
                size='small'
                src={IntelLogo}
            />
            Bid Per Click
            /1,000 Impressions:
            <Button size='small' floated='right' basic color='red'>
                Stop Running
            </Button>
            {/* <div> */}
                <h1 floated='right' className='bidPrice'> $1.06 </h1>
            {/* </div> */}

            <Card.Description>
                Our Company provides and amazing  product that has the abillity to transformhe cultur of indaviduals to many cartirias....           
            </Card.Description>
        </Card.Content>
    </Card>
)


