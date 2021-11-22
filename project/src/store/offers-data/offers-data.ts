import { OffersData } from '../../types/state';
import { Actions, ActionType } from '../../types/action';

const initialState: OffersData = {
  offers: [],
  offersNear: [],
  offer: null,
  isOffersNearLoaded: false,
  isOfferLoading: false,
  isOfferError: false,
  isDataLoaded: false,
};

const offersData = (state = initialState, action: Actions): OffersData => {
  switch(action.type) {
    case ActionType.LoadOffers:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
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
    default:
      return state;
  }
};

export {offersData};
