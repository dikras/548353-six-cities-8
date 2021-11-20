import { OffersType } from './offer';
import { AuthorizationStatus } from '../const';
import { User } from './user';
import { ReviewsType } from './review';


export type State = {
  currentCity: string,
  offers: OffersType,
  currentSortingOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  user: User | null,
  reviews: ReviewsType,
  isReviewsLoaded: boolean,
};
