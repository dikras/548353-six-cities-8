import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { offers } from '../mocks/offers';

export const initialState = {
  cityName: 'Paris',
  cityOffers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, cityName: action.payload};
    case ActionType.CreateOffersList:
      return {...state, cityOffers: offers};
    default:
      return state;
  }
};

export {reducer};
