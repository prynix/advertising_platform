import React from 'react';
import ReactDOM from 'react-dom';
import {Logo, WorkTogether} from './Home';

class App extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <WorkTogether />

            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
 