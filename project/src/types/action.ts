import { OffersType } from './../types/offer';

export enum ActionType {
  ChangeCity = 'changeCity',
  CreateOffersList = 'createOffersList',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: string,
};

export type CreateOffersListAction = {
  type: ActionType.CreateOffersList;
  payload: OffersType;
};

export type Actions = ChangeCityAction | CreateOffersListAction;
