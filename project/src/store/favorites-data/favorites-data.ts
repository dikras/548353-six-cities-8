import { createReducer } from '@reduxjs/toolkit';
import { FavoriteOffersData } from '../../types/state';
import { loadFavoriteOffers, updateFavoriteOffers } from '../action';

const initialState: FavoriteOffersData = {
  offersFavorite: [],
  isOffersFavoriteLoaded: false,
};

const favoriteOffersData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavoriteOffers, (state, action) => {
      state.offersFavorite = action.payload;
      state.isOffersFavoriteLoaded = true;
    })
    .addCase(updateFavoriteOffers, (state, action) => {
      state.offersFavorite = state.offersFavorite.map((offer) => {
        if (offer.id !== action.payload.id) {
          return offer;
        }
        return action.payload;
      });
    });
});

export {favoriteOffersData};
