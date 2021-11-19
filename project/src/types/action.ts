import {
  changeCity,
  changeSorting,
  loadOffers,
  requireAuthorization,
  userLogin,
  userLogout,
  redirectToRoute
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
  UserLogout = 'user/logout',
  RedirectToRoute = 'app/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSorting>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof userLogout>
  | ReturnType<typeof userLogin>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
