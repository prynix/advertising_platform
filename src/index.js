import React from 'react';
import ReactDOM from 'react-dom';
import { AdvertiserDashboard } from '../src/pages/AdvertiserDashboard';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react';
import { CustomSignUp } from "../src/components/SignUp";
import { Authenticator } from "aws-amplify-react/dist/Auth";

{/*Amplify.configure(config)*/}

class AppWithAuth extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <Authenticator hideDefault={[withAuthenticator]} amplifyConfig={config}>
                <CustomSignUp />
                {/* <AdvertiserDashboard /> */}
                </Authenticator>
            </div>
        );
    }
} 
ReactDOM.render(<AppWithAuth />, document.getElementById('root'));
