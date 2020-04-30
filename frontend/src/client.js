import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ReduxProvider } from './components/functional/ReduxProvider';

const div = document.getElementById('app');

ReactDOM.render(
<ReduxProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ReduxProvider>  
, div)
