import React from 'react';
import ReactDOM from 'react-dom';
import { AdvertiserDashboard } from '../src/pages/AdvertiserDashboard';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(config)

class App extends React.Component {
    render() {
        return (
            <div>
                    <AdvertiserDashboard />
            </div>
        );
    }
}

const AppWithAuth = withAuthenticator(App, true);

ReactDOM.render(<AppWithAuth />, document.getElementById('root'));
