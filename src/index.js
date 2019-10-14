import React from 'react';
import ReactDOM from 'react-dom';
import { CampaignForm } from "./components/CampaignForm";
import { Container } from 'semantic-ui-react';

class AppCampaign extends React.Component {
    render() {
        return (
          <Container textAlign='center'>
            <CampaignForm />
          </Container>
        );
    }
}

ReactDOM.render(<AppCampaign />, document.getElementById('root'));
