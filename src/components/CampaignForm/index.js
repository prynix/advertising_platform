import React, { Component } from 'react';


import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
// import Success from './Success';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
export class CampaignForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { firstName, lastName } = this.state;
        const values = { firstName, lastName };
        switch(step) {
        case 1:
            return <Step1 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <Step2 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Step3 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Step4 />
        }
    }
}

//export default CampaignForm;