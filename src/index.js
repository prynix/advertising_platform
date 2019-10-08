import React from 'react';
import ReactDOM from 'react-dom';
import {Logo } from './Home';
import { WorkTogetherButton } from '../src/components/WorkTogetherButton';


class App extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <WorkTogetherButton />

            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
 