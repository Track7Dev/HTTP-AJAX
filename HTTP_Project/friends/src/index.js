import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

const create_MW_Store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store = {create_MW_Store(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
</Provider>
, document.getElementById('root'));

