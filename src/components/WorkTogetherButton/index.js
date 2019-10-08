
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card } from 'semantic-ui-react';


export class WorkTogetherButton extends Component {
    render() {
        return (
            <Card className='work-together' color='teal' link header='Work Together' />
        )
    }
}

