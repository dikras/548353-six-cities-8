import { OffersType, OfferType } from './offer';
import { AuthorizationStatus, ReviewStatus, CityName, SortingType } from '../const';
import { User } from './user';
import { ReviewsType } from './review';
import {  RootState } from '../store/root-reducer';

export type AppProcess = {
  currentCity: CityName,
  currentSortingOption: SortingType,
};

export type UserProcess = {
  user: User | null,
  authorizationStatus: AuthorizationStatus,
};

export type OffersData = {
  offers: OffersType,
  offer: OfferType | null,
  offersNear: OffersType,
  isDataLoaded: boolean,
  isOffersNearLoaded: boolean,
  isOfferLoading: boolean,
  isOfferError: boolean,
}

export type ReviewsProcess = {
  reviews: ReviewsType,
  reviewStatus: ReviewStatus,
  isReviewsLoaded: boolean,
  isPostReviewError: boolean,
};

export type State = RootState;
