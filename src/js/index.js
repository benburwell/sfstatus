require('../scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { fetchInstanceStatus } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchInstanceStatus());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
