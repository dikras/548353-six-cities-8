import { OffersType } from './offer';
import { AuthorizationStatus } from '../const';

export type State = {
  currentCity: string,
  offers: OffersType,
  currentSortingOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
