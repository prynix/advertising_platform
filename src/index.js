import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import { AdvertiserDashboard } from '../src/pages/AdvertiserDashboard';
import { NewCampaign } from '../src/pages/NewCampaign';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
              <Route exact={true} path='/' render={() => (
                  <AdvertiserDashboard />
              )}/>
              <Route exact={true} path='/PublisherDashboard' render={() => (
                  <NewCampaign />
              )}/>
              <Route exact={true} path='/NewCampaign' render={() => (
                  <NewCampaign />
              )}/>
          </BrowserRouter>
            
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
 