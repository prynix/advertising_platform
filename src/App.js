import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Card, Image } from 'semantic-ui-react';

const GridComp = () => (
   
  <Grid divided='vertically'>
    <Grid.Row columns={6}>
      <Grid.Column  textAlign='center'>
        <Card image="/logo.png" />
        <Card link header='Publisher Name'  />
        <Card link header='Balance' meta='$5,567' />
      </Grid.Column>
      <Grid.Column  textAlign='center'>
        <Card link header='Work Together'  />
        <Card link header='My Account' />
        <Card link header='User ID:' meta='356674' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridComp
