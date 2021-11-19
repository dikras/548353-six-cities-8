import { OffersType } from './offer';
import { AuthorizationStatus } from '../const';
import { User } from './user';

export type State = {
  currentCity: string,
  offers: OffersType,
  currentSortingOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  user: User | null;
};
