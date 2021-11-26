import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  RedirectToRoute = 'app/redirectToRoute',
  ChangeCity = 'app/changeCity',
  ChangeSorting = 'app/changeSorting',
  RequireAuthorization = 'user/requireAuthorization',
  UserLogin = 'user/login',
  UserLogout = 'user/logout',
  LoadReviews = 'reviews/loadReviews',
  PostReview = 'review/postReview',
  LoadOffers = 'offers/loadOffers',
  LoadOffersNear = 'offers/loadOffersNear',
  UpdateOffers = 'offers/updateOffers',
  UpdateFavoriteOffers = 'favorite-offers/updateFavoriteOffers',
  LoadFavoriteOffers = 'favorite-offers/loadFavoriteOffers',
  LoadOffer = 'offer/loadOffer',
  LoadOfferFull = 'offer/loadOfferFull',
  LoadOfferError = 'offer/loadOfferError',
  UpdateOffer = 'offer/updateOffer',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
