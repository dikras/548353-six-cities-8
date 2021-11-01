import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { CITY } from './mocks/city';
import { cities } from './const';

const Setting = {
  OFFERS_COUNT: 312,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offersCount = {Setting.OFFERS_COUNT}
        offers = {offers}
        reviews = {reviews}
        city = {CITY}
        points={offers.map((offer) => (
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }
        ))}
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
