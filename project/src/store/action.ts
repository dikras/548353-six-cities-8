import { ActionType, ChangeCityAction, CreateOffersListAction } from '../types/action';

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const createOffersList = (): CreateOffersListAction => ({
  type: ActionType.CreateOffersList,
});
