import React, { Component, useRef  } from 'react';
import { Form, Button, Grid, Header, Label, Segment } from 'semantic-ui-react';
import { throws } from 'assert';

class Step3 extends Component{
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
            <Grid className='campaign-steps' container centered color='black'>
                <Segment>
                <Form color='blue' >
                    <Header as='h1'>Tell us what you want your campaign to Do!</Header>
                    <Form.Field>
                        <label>Cost Model</label>
                        <input placeholder='Cost per click / Cost per 1000 views / Cost per lead'
                        
                        defaultValue={values.age}
                        />
                        
                    </Form.Field>
                      
                    <Form.Field>
                        <label>Currency</label>
                        <input placeholder='USD/EUR/AUD/GBP/Other'
                        
                        defaultValue={values.city}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Budget For Compaign</label>
                        <input placeholder='You can chose more thin one.'
                        
                        defaultValue={values.city}
                        />
                    </Form.Field>
                    <Button size='large'  onClick={this.back}>Back</Button>
                    <Button size='large' positive onClick={this.saveAndContinue}>Next</Button>
                </Form>
                </Segment>
                </Grid>
        )
    }
}

export default Step3;