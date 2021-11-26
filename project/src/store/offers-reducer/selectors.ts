import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { OfferType, OffersType } from '../../types/offer';

export const getOffers = (state: State): OffersType => state[NameSpace.data].offers;
export const getOffer = (state: State): OfferType | null => state[NameSpace.data].offer;
export const getOffersNear = (state: State): OffersType => state[NameSpace.data].offersNear;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getIsOfferLoading = (state: State): boolean => state[NameSpace.data].isOfferLoading;
export const getIsOfferError = (state: State): boolean => state[NameSpace.data].isOfferError;
export const getIsOffersNearLoaded = (state: State): boolean => state[NameSpace.data].isOffersNearLoaded;
