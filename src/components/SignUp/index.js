import React from "react";
import { SignUp } from "aws-amplify-react";
import { Form, Grid, Segment, Header,  Checkbox, Divider } from 'semantic-ui-react';


export class CustomSignUp extends SignUp {
    constructor(props) {
        super(props);
        this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    }

    showComponent(theme) {
    return (
        <Grid container centered>
         <Grid.Column width={10} >
         <Form>
         <Segment>
            <Header as='h2'  color='green'>Account Information</Header>
             <Divider hidden />
                <Form.Group>
                  <Form.Input label='Full Name' width={8} placeholder='Full Name' />
                  <Form.Input label='Middle Name' width={8} placeholder='Middle Name' />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Country' width={8} placeholder='Country' />
                  <Form.Input label='City' width={8} placeholder='City' />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Company Name' width={8} placeholder='Company Name' />
                  <Form.Input label='Industry' width={4} placeholder='Industry' />
                  <Form.Input label='Sub Industry' width={4} placeholder='Sub Industry' />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Position' width={8} placeholder='Position' />
                  <Form.Input label='User ID' width={8} placeholder='User ID' />
                </Form.Group>
            </Segment>
            <Segment>
            <Header as='h2'  color='green'>Target Information</Header>
            <Divider hidden />
                <Form.Group>
                  <Form.Input label='Product Link/Website' width={8} placeholder='Product Link/Website' />
                </Form.Group>
                <Header as='h2'  color='green'>Audience Definition</Header>
                <Divider hidden />
                <Form.Group>
                  <Form.Input label='Ages (Range)' width={6} placeholder='Ages (Range)' />
                  <Form.Input label='Gender' width={6} placeholder='Gender' />
                  <Form.Input label='Interests' width={6} placeholder='Interests' />
                </Form.Group>
                <Header as='h2'  color='green'>Audience Location</Header>
                <Divider hidden />
                <Form.Group>
                  <Form.Input label='Country' width={6} placeholder='Country' />
                  <Form.Input label='City' width={6} placeholder='City' />
                  <Form.Input label='Occupation' width={6} placeholder='Occupation' />
                </Form.Group>
                <Header as='h2'  color='green'>Audience Type</Header>
                <Form.Field>
                    <Checkbox label='Student &nbsp;&nbsp;&nbsp;' /> 
                    <Checkbox label='Shopper &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Business Owner &nbsp;&nbsp;&nbsp;' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Singles &nbsp;&nbsp;&nbsp;' /> 
                    <Checkbox label='Traveler &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Social Scene &nbsp;&nbsp;&nbsp;' />
                </Form.Field>
            </Segment>


            <Segment>
            <Header as='h2'  color='green'>Source Of Traffic</Header>
            <Divider hidden />
                 <Form.Field>
                   <Header as='h4' color='green'>Social</Header>
                  <Divider hidden />
                    <Checkbox label='Facebook &nbsp;&nbsp;&nbsp;' /> 
                    <Checkbox label='Instagram &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='SnapChat &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Whatsapp &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Tumbler &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Blogger &nbsp;&nbsp;&nbsp;' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Pinterest &nbsp;&nbsp;&nbsp;' /> 
                    <Checkbox label='Twitter &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Telegram &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Linkedin &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Reddit &nbsp;&nbsp;&nbsp;' />
                </Form.Field>
                <Form.Field>
                <Divider hidden />
                  <Header as='h4' color='green'>Email</Header>
                  <Divider hidden />
                    <Checkbox label='Monthly Mass Email &nbsp;&nbsp;&nbsp;' /> 
                    <Checkbox label='One-Time Mass Email &nbsp;&nbsp;&nbsp;' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Weekly Mass Email &nbsp;&nbsp;&nbsp;' />
                </Form.Field>
                <Form.Field>
                <Divider hidden />
                  <Header as='h4' color='green'>PPC (Paid Ads)</Header>
                  <Divider hidden />
                    <Checkbox label='Google Ads &nbsp;&nbsp;&nbsp;' /> 
                    <Checkbox label='Facebook Ads &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Taboola &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Bing Ads &nbsp;&nbsp;&nbsp;' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Twitter Ads &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Friends & Traffic Ads &nbsp;&nbsp;&nbsp;' />
                    <Checkbox label='Propeller Ads &nbsp;&nbsp;&nbsp;' />
                </Form.Field>

            </Segment>

            <Segment>
            <Header as='h2'  color='green'>Budget</Header>
            <Divider hidden />
                <Form.Group>
                  <Form.Input label='Social' width={8} placeholder='Social' />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='Email' width={6} placeholder='Email' />
                  <Form.Input label='Total Budget' width={6} placeholder='Total Budget' />
                </Form.Group>
                <Form.Group>
                  <Form.Input label='PPC (Paid Ads)' width={6} placeholder='PPC (Paid Ads)' />
                </Form.Group>
                
            </Segment>

            </Form>
             </Grid.Column>
        </Grid>
    );
  }
}
