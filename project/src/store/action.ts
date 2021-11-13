import { ActionType, ChangeCityAction, ChangeSortingAction, GetOffersAction } from '../types/action';
import { OffersType } from '../types/offer';

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const changeSorting = (sortingType: string): ChangeSortingAction => ({
  type: ActionType.ChangeSorting,
  payload: sortingType,
});

export const getOffers = (offers: OffersType): GetOffersAction => ({
  type: ActionType.GetOffers,
  payload: offers,
});
