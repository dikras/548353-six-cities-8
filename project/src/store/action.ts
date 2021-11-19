import { ActionType } from '../types/action';
import { OffersType } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { User } from '../types/user';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSorting = (sortingType: string) => ({
  type: ActionType.ChangeSorting,
  payload: sortingType,
} as const);

export const loadOffers = (offers: OffersType) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const userLogin = (user: User) => ({
  type: ActionType.UserLogin,
  payload: user,
} as const);

export const userLogout = () => ({
  type: ActionType.UserLogout,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
