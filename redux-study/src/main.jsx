import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  cash: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
