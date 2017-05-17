import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React Router & BrowserHistory
import { Router, browserHistory } from 'react-router';
// Passes the store down to all the routes
import { Provider } from 'react-redux';
// Routes
import routes from './routes';
// Sync Browser History With Redux Store
import { syncHistoryWithStore } from 'react-router-redux';
// Redux Stoe
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider> ,
  document.getElementById('root')
);
