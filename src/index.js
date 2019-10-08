import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from '../src/pages/dashboard';


class App extends React.Component {
    render() {
        return (
            <div>
                <Dashboard />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
 