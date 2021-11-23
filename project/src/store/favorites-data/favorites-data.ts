import { FavoriteOffersData } from '../../types/state';
import { Actions, ActionType } from '../../types/action';

const initialState: FavoriteOffersData = {
  offersFavorite: [],
  isOffersFavoriteLoaded: false,
};

const favoriteOffersData = (state = initialState, action: Actions): FavoriteOffersData => {
  switch(action.type) {
    case ActionType.LoadFavoriteOffers:
      return {...state,
        offersFavorite: action.payload,
        isOffersFavoriteLoaded: true,
      };
    case ActionType.UpdateFavoriteOffers:
      return {...state,
        offersFavorite: state.offersFavorite.map((offer) => {
          if (offer.id !== action.payload.id) {
            return offer;
          }
          return action.payload;
        }),
      };
    default:
      return state;
  }
};

export {favoriteOffersData};
