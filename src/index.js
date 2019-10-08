import React from 'react';
import ReactDOM from 'react-dom';
import { AdvertiserDashboard } from '../src/pages/AdvertiserDashboard';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react';
import { CustomSignUp } from "../src/components/SignUp";
import { Authenticator } from "aws-amplify-react/dist/Auth";

Amplify.configure(config)

class AppWithAuth extends React.Component {
    render() {
        return (
            <div>
                <Authenticator hide={[CustomSignUp]} amplifyConfig={config}>
                <CustomSignUp />
                {/* <AdvertiserDashboard /> */}
                </Authenticator>
            </div>
        );
    }
}

// const AppWithAuth = withAuthenticator(App, true);

ReactDOM.render(<AppWithAuth />, document.getElementById('root'));
