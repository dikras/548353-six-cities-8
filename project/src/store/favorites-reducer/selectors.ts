import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { OffersType } from '../../types/offer';

export const getIsOffersFavoriteLoaded = (state: State): boolean => state[NameSpace.favorites].isOffersFavoriteLoaded;
export const getOffersFavorite = (state: State): OffersType => state[NameSpace.favorites].offersFavorite.filter((offer) => offer.isFavorite);
export const getPlaces = (state: State): string[] => [...new Set(state[NameSpace.favorites].offersFavorite.map((offer) => offer.city.name))];
