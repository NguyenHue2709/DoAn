import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Picker from './components/Picker'
//import Dialog from './components/Dialog'
import * as serviceWorker from './serviceWorker';
//import Account from './Account';
//import fire from './fire';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    
    <Picker />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
