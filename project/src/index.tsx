/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { createOffersList } from './store/action';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

store.dispatch(createOffersList(offers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
