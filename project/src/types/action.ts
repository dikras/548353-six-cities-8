import { OffersType } from './../types/offer';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSorting = 'main/changeSorting',
  GetOffers = 'getOffers',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: string,
};

export type ChangeSortingAction = {
  type: ActionType.ChangeSorting;
  payload: string,
};

export type GetOffersAction = {
  type: ActionType.GetOffers;
  payload: OffersType;
};

export type Actions = ChangeCityAction | GetOffersAction | ChangeSortingAction;
