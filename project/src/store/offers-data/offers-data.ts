import { createReducer } from '@reduxjs/toolkit';
import { OffersData } from '../../types/state';
import { loadOffers, loadOffer, loadOffersNear, loadOfferFull, loadOfferError } from '../action';

const initialState: OffersData = {
  offers: [],
  offersNear: [],
  offer: null,
  isOffersNearLoaded: false,
  isOfferLoading: false,
  isOfferError: false,
  isDataLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
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
    });
});

export {offersData};
