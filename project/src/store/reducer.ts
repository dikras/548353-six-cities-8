import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { CityName, SortingType, AuthorizationStatus } from '../const';

export const initialState = {
  currentCity: CityName.Paris,
  offers: [],
  currentSortingOption: SortingType.Default,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  user: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.ChangeSorting:
      return {...state, currentSortingOption: action.payload};
    case ActionType.LoadOffers:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.UserLogin:
      return {
        ...state,
        user: action.payload,
        authorizationStatus: AuthorizationStatus.Auth,
      };
    case ActionType.UserLogout:
      return {
        ...state,
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};

export {reducer};
