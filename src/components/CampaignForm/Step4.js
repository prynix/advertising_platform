import React, { Component, useRef  } from 'react';

import { Form, Button, Grid, Header, Label, Card, Divider, Segment } from 'semantic-ui-react';


class Step4 extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    constructor(props) {
        super(props);
        this.state = {
          file: null
        };
    }
    fileInputRef = React.createRef();

    render(){
        const { values } = this.props
        return(
            
            <Segment>
                <Form color='blue' >
                    <Header as='h1'>Tell us what you want your campaign to Do!</Header>
                    <Form.Field>
                        <label>Offer a bid</label>
                        <input placeholder='Per click, Per 1000 views, Per lead'
                        />
                    </Form.Field>
                   
                    <Form.Field className='campaign-titles'>
                <Label as='h2' color='green' ribbon='left' size='large' className='campaign-ribbon'>
                  Bid from similar offers other adevertiser
                </Label>
                <Label as='h2' color='blue' ribbon='right' size='large' className='campaign-ribbon'>
                  Average BID in your niche: $1.70
                </Label>
                </Form.Field>
                <Divider hidden />
                <Divider hidden />

                <Grid columns={4} className='campaign-steps' container centered>
 <Grid.Row className='campaign-cards' stretched>
                
                    <Grid.Column width={2} textAlign='center'> 
                    <Card>
                        <Card.Content>
                            Bid <h1 style={{ color: 'blue' }}> $1.43</h1>
                        </Card.Content>
                    </Card>

                    </Grid.Column>
                     <Grid.Column  width={2} textAlign='center'> 
                    <Card>
                        <Card.Content>
                            Bid <h1 style={{ color: 'blue' }}> $0.99</h1>
                        </Card.Content>
                    </Card>

                     </Grid.Column>
                     <Grid.Column  width={2} textAlign='center'> 
                    <Card>
                        <Card.Content>
                            Bid <h1 style={{ color: 'blue' }}> $2.77</h1>
                        </Card.Content>
                    </Card>

                     </Grid.Column>
                     <Grid.Column  width={2} textAlign='center'> 
                    <Card>
                        <Card.Content>
                            Bid <h1 style={{ color: 'blue' }}> $1.03</h1>
                        </Card.Content>
                    </Card>

                     </Grid.Column>
                     </Grid.Row>
                     </Grid>
                      <Form.Field>
                      <Divider hidden />
                    <Button size='large'  onClick={this.back}>Back</Button>
                    <Button size='large' positive onClick={this.saveAndContinue}>Post Bid</Button>
                    </Form.Field>
                </Form>
                </Segment> 
        )
    }
}

export default Step4;