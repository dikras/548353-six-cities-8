import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { CityName, SortingType, AuthorizationStatus, ReviewStatus } from '../const';

export const initialState = {
  currentCity: CityName.Paris,
  offers: [],
  offersNear: [],
  offer: null,
  currentSortingOption: SortingType.Default,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  user: null,
  reviews: [],
  isReviewsLoaded: false,
  isOffersNearLoaded: false,
  isOfferLoading: false,
  isOfferError: false,
  reviewStatus: ReviewStatus.Unknown,
  isPostReviewError: false,
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
    case ActionType.LoadReviews:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true,
      };
    case ActionType.PostReview:
      return {...state, reviewStatus: action.payload};
    case ActionType.LoadOffersNear:
      return {
        ...state,
        offersNear: action.payload,
        isOffersNearLoaded: true,
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LoadOffer:
      return {
        ...state,
        isOfferLoading: true,
        isOfferError: false,
      };
    case ActionType.LoadOfferFull:
      return {
        ...state,
        offer: action.payload,
        isOfferLoading: false,
      };
    case ActionType.LoadOfferError:
      return {
        ...state,
        isOfferLoading: false,
        isOfferError: true,
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
