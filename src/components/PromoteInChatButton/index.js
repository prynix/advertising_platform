
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';


export class PromoteInChatButton extends Component {
    render() {
        return (
            <Button size='big' className='promoteInChatButtonStyle' color='blue'>
                Promote In Chat
            </Button>
        )
    }
}

