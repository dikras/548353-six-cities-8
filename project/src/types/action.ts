import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSorting = 'main/changeSorting',
  LoadOffers = 'data/loadOffers',
  UpdateOffers = 'data/updateOffers',
  UpdateOffersNear = 'data/updateOfferNear',
  UpdateOffer = 'data/updateOffer',
  RequireAuthorization = 'user/requireAuthorization',
  UserLogin = 'user/login',
  LoadOffer = 'data/loadOffer',
  UserLogout = 'user/logout',
  RedirectToRoute = 'app/redirectToRoute',
  LoadReviews = 'data/loadReviews',
  LoadOffersNear = 'data/loadOffersNear',
  LoadOfferFull = 'data/loadOfferFull',
  LoadOfferError = 'data/loadOfferError',
  PostReview = 'user/postReview',
  LoadFavoriteOffers = 'data/loadFavoriteOffers',
  UpdateFavoriteOffers = 'data/updateFavoriteOffers',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
