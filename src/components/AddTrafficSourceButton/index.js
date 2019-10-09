
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';


export class AddTrafficSourceButton extends Component {
    render() {
        return (
            <Button size='huge' className='addTrafficSourceButtonStyle' color='green'>
               Add Traffic Source
            </Button>
        )
    }
}

