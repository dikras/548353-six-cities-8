import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import { OffersType } from '../../types/offer';

export const getOffersFavorite = (state: State): OffersType => state[NameSpace.favorites].offersFavorite;
export const getIsOffersFavoriteLoaded = (state: State): boolean => state[NameSpace.favorites].isOffersFavoriteLoaded;
