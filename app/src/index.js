// main file for react app
// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
import App from './components/app';
// import reducers from './reducers/';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// <Provider store={createStoreWithMiddleware(reducers)}>
//  <App />
// </Provider>

ReactDOM.render(
  <App />
, document.querySelector('.app')); /* global document */
