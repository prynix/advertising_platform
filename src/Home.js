import React, { Component } from 'react';
//import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Grid, Card, Image, Segment, Container } from 'semantic-ui-react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 

export class Logo extends Component {
  render() {
    return (
      <Grid columns={6} >
    <Grid.Row stretched>
      <Grid.Column textAlign='center'>
      <Image centered  size='small' src='/logo.png' />
      <Card link header='Publisher Name'  />
      <Card link header='Balance' meta='$5,567' />
      </Grid.Column>
      <Grid.Column textAlign='center'>
      <Card className='work-together' color='teal' link header='Work Together'  />
      <Card link header='My Account'  />
      <Card link header='User ID:' meta='356674'  />
      </Grid.Column>
      <Grid.Column textAlign='center' >
         <Card centered link header='Advertiser' meta='Promoted: 78' /> 
         <Card link header='No. Total Clicks:' meta='900,055' />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Card link header='Money Earned:' meta='$23,450' />
        <Card link header='No. Total Impressions:' meta='3,657,566' />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Card link header='Social Accounts'  />
        <Card link header='Find New Offers'  />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Card link header='Withdraw Funds'  />
        <Card link header='Support'  />
      </Grid.Column>
    </Grid.Row>
   
  
      </Grid>
    )
  }
}

export class WorkTogether extends Component {
  render() {   
    return (
      <div></div>
    )
  }
}
 