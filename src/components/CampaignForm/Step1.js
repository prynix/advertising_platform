import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import { Form, Button, Header, Grid, Segment, Label } from 'semantic-ui-react';

class Step1 extends Component{

  
    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render(){
        const { values } = this.props;
        return(
            <Grid className='campaign-steps' container centered>
             <Segment>
            <Form >
                <Header as='h1'>Tell us what you want your campaign to Do!</Header>
                <Form.Field>
                    <label>Campaign Source</label>
                    <input
                    placeholder='i.e Facebook, Bloger, Tumbler, Instagram'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
               

                 
                <Button size='large' positive onClick={this.saveAndContinue}>Next </Button>
                
            </Form>
            </Segment>
            </Grid>
        )
    }
}

export default Step1;