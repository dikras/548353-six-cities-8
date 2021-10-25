import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { CITY } from './mocks/city';

const Setting = {
  OFFERS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
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
    />
  </React.StrictMode>,
  document.getElementById('root'));
