import {
  changeCity,
  changeSorting,
  loadOffers,
  requireAuthorization,
  userLogin,
  userLogout,
  redirectToRoute,
  loadReviews
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
  RequireAuthorization = 'user/requireAuthorization',
  UserLogin = 'user/login',
  LoadOffer = 'data/loadOffer',
  UserLogout = 'user/logout',
  RedirectToRoute = 'app/redirectToRoute',
  LoadReviews = 'data/loadReviews',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSorting>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof userLogout>
  | ReturnType<typeof userLogin>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadReviews>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
