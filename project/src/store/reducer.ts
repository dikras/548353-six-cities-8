import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { CityName } from '../const';

export const initialState = {
  currentCity: CityName.Paris,
  offers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.CreateOffersList:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export {reducer};
