import React from 'react';
import ReactDOM from 'react-dom';
import { AdvertiserDashboard } from '../src/pages/AdvertiserDashboard';


class App extends React.Component {
    render() {
        return (
            <div>
                <AdvertiserDashboard />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
 