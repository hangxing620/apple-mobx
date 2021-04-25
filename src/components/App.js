import React, { Component } from 'react';
import Apple from './apple'
import AppleStore from '../stores/AppleStore'

const apple = new AppleStore()
class App extends Component {
  render() {
    return (
      <div>
        <Apple apple={apple} />
      </div>
    );
  }
}

export default App;
