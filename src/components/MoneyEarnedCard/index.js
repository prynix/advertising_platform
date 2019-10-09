import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';
import './styles.css';

export const MoneyEarnedCard = (props) => (
    <Card className='moneyEarnedCard'>
        <Card.Content>
            Money Earned <h1 style={{color: 'green'}}> $1,240</h1>
        </Card.Content>
    </Card>
)


