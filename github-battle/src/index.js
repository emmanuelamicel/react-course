import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import citiesReducer from './store/reducers/citiesReducer';
import thunkMiddleware from 'redux-thunk'
import popularReducer from './store/reducers/popularReducer';

// Création de mon reducer
const reducer = combineReducers({
  cities: citiesReducer,
  popular: popularReducer,
  // user: userReducer
})

// Création du middleware et de son application
const withMiddleware = applyMiddleware(thunkMiddleware)

// Utile pour l'activation des Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Création de mon store
const store = createStore(reducer, undefined, composeEnhancers(withMiddleware));

// Création de mon store
// Ligne Windows à choper ici pour l'extension Chrome : https://github.com/zalmoxisus/redux-devtools-extension
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
