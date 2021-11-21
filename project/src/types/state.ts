import { OffersType, OfferType } from './offer';
import { AuthorizationStatus, ReviewStatus } from '../const';
import { User } from './user';
import { ReviewsType } from './review';


export type State = {
  currentCity: string,
  offers: OffersType,
  offer: OfferType | null,
  offersNear: OffersType,
  currentSortingOption: string,
  authorizationStatus: AuthorizationStatus,
  reviewStatus: ReviewStatus,
  isDataLoaded: boolean,
  user: User | null,
  reviews: ReviewsType,
  isReviewsLoaded: boolean,
  isOffersNearLoaded: boolean,
  isOfferLoading: boolean,
  isOfferError: boolean,
  isPostReviewError: boolean,
};
