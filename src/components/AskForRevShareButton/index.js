
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';


export class AskForRevShareButton extends Component {
    render() {
        return (
            <Button size='big' className='askForRevShareButtonStyle' color='orange'> 
                Ask For Rev Share 
            </Button>
        )
    }
}

