import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null,
};

function reducer(state = initialState, action) {
  
}

render(
  <App />,
  document.getElementById('root')
);
