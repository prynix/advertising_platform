import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form,Header } from 'semantic-ui-react';
import './styles.css';

export const CampaignForm = (props) => (

    <Form>
    <Header as='h3'>Tell Us What You Want How You Want <br /> Your Campaign To Run  </Header>
    <Header as='h3'> </Header>
    <Form.Field>
      <label>Campaign Name</label>
      <input />
    </Form.Field>
    <Form.Field>
      <label>User Input</label>
      <input />
    </Form.Field>
  </Form>
)
