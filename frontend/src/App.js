import React, { Component } from 'react';
import { Routes } from './components/functional/Routes';

import './scss/index.scss'
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <Routes />
    )
  }
}

export {
  App
}
