import { combineReducers } from 'redux';
import { appProcess } from './app-process/app-process';
import { offersData } from './offers-data/offers-data';
import { reviewsProcess } from './reviews-process/reviews-process';
import { userProcess } from './user-process/user-process';
import { favoriteOffersData } from './favorites-data/favorites-data';

export enum NameSpace {
  data = 'DATA',
  app = 'APP',
  user = 'USER',
  reviews = 'REVIEWS',
  favorites = 'FAVORITES',
}

export const rootReducer = combineReducers({
  [NameSpace.app]: appProcess,
  [NameSpace.data]: offersData,
  [NameSpace.reviews]: reviewsProcess,
  [NameSpace.user]: userProcess,
  [NameSpace.favorites]: favoriteOffersData,
});

export type RootState = ReturnType<typeof rootReducer>;
