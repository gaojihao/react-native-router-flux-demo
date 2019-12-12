import React, { Component } from 'react';
import {Image} from 'react-native';

export default class BackImage extends Component {
    render(){
      return (
        <Image 
        source={require('../../images/back.png')}
        style={{marginLeft:15, width: 24, height: 24 }} />
      );
    }
  }