import { createReducer } from '@reduxjs/toolkit';
import { OffersData } from '../../types/state';
import { loadOffers, updateOffer, updateOffers, loadOffer, loadOffersNear, loadOfferFull, loadOfferError } from '../action';

const initialState: OffersData = {
  offers: [],
  offersNear: [],
  offer: null,
  isOffersNearLoaded: false,
  isOfferLoading: false,
  isOfferError: false,
  isDataLoaded: false,
};

const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state) => {
      state.isOfferLoading = true;
      state.isOfferError = false;
    })
    .addCase(loadOffersNear, (state, action) => {
      state.offersNear = action.payload;
      state.isOffersNearLoaded = true;
    })
    .addCase(loadOfferFull, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(loadOfferError, (state, action) => {
      state.isOfferError = true;
      state.isOfferLoading = false;
    })
    .addCase(updateOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = state.offers.map((offer) => {
        if (offer.id !== action.payload.id) {
          return offer;
        }
        return action.payload;
      });
    });
});

export {offersReducer};
