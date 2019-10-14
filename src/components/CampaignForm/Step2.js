import React, { Component, useRef  } from 'react';
import { Form, Button, Grid, Header, Segment } from 'semantic-ui-react';
import { throws } from 'assert';

class Step2 extends Component{
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
        console.log(this);
    }
    fileInputRef = React.createRef();

    render(){
        const { values } = this.props
        return(
            <Grid className='campaign-steps' container centered>
            <Segment>
                <Form color='blue' >
                    <Header as='h1'>Tell us what you want your campaign to Do!</Header>
                    <Form.Field>
                        <label>Campaign Headline</label>
                        <input placeholder='i.e Facebook, Bloger, Tumbler, Instagram'
                        onChange={this.props.handleChange('age')}
                        defaultValue={values.age}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Offer Text</label>
                        <input placeholder='Tell your potential clients what you are offering '
                        onChange={this.props.handleChange('city')}
                        defaultValue={values.city}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Upload Creative (Upload File) Png.Jpg</label>
                        <Button color='blue'
                        content="Upload File (Up To 10MB) "
                        labelPosition="left"
                        icon="file"
                        onClick={() => this.fileInputRef.current.click()}
                      />
                      <input
                        ref={this.fileInputRef}
                        type="file"
                        hidden
                        onChange={this.fileChange}
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

export default Step2;