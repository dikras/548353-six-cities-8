import { ActionType } from '../types/action';
import { OffersType } from '../types/offer';
import { AuthorizationStatus } from '../const';

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

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
