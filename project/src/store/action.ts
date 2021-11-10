import { ActionType, ChangeCityAction, CreateOffersListAction } from '../types/action';
import { OffersType } from '../types/offer';

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const createOffersList = (offers: OffersType): CreateOffersListAction => ({
  type: ActionType.CreateOffersList,
  payload: offers,
});
