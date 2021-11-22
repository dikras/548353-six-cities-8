import {
  changeCity,
  changeSorting,
  loadOffers,
  requireAuthorization,
  userLogin,
  userLogout,
  redirectToRoute,
  loadReviews,
  loadOffersNear,
  loadOffer,
  loadOfferFull,
  loadOfferError,
  postReview,
  updateOffers
} from '../store/action';
import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSorting = 'main/changeSorting',
  LoadOffers = 'data/loadOffers',
  UpdateOffers = 'data/updateOffers',
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
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSorting>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof userLogout>
  | ReturnType<typeof userLogin>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof loadOffersNear>
  | ReturnType<typeof loadOffer>
  | ReturnType<typeof loadOfferFull>
  | ReturnType<typeof loadOfferError>
  | ReturnType<typeof postReview>
  | ReturnType<typeof updateOffers>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
