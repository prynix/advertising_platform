import React, { Component } from 'react';
//import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Grid, Card, Image, Segment } from 'semantic-ui-react';


export class Logo extends Component {
  render() {
    return (
      <Grid columns='equal'>
        <Grid.Row>
      <Grid.Column textAlign='center'> <Image centered  size='small' src='/logo.png' /></Grid.Column>
      <Grid.Column textAlign='center'><Card className='work-together' color='teal' link header='Work Together'  /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Advertiser' meta='Promoted: 78' /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Money Earned:' meta='$23,450' /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Social Accounts'  /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Withdraw Funds'  /></Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign='center'><Card link header='Publisher Name'  /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='My Account'  /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Advertiser' meta='Promoted: 78' /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Money Earned:' meta='$23,450' /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Social Accounts'  /></Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Withdraw Funds'  /></Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign='center'><Card link header='Balance' meta='$5,567' /></Grid.Column>
      <Grid.Column><Card link header='User ID:' meta='356674'  /></Grid.Column>
      <Grid.Column>Computer B Second</Grid.Column>
      <Grid.Column textAlign='center'><Card link header='Publisher Name'  /></Grid.Column>
    </Grid.Row> 
      </Grid>
    )
  }
}

export class WorkTogether extends Component {
  render() {   
    return (
  <Grid>
    <Grid.Row stretched>
    
    </Grid.Row>
  </Grid>
    )
  }
}
 