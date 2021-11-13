import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { CityName, SortingType } from '../const';

export const initialState = {
  currentCity: CityName.Paris,
  currentSortingOption: SortingType.Default,
  offers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.ChangeSorting:
      return {...state, currentSortingOption: action.payload};
    case ActionType.GetOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export {reducer};
