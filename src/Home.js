import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react';


export class Logo extends Component {
  render() {
    return (
      <Image centered  size='small' src='/logo.png' />
    )
  }
}

