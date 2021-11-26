import { combineReducers } from 'redux';
import { appReducer } from './app-reducer/app-reducer';
import { offersReducer } from './offers-reducer/offers-reducer';
import { reviewsReducer } from './reviews-reducer/reviews-reducer';
import { userReducer } from './user-reducer/user-reducer';
import { favoritesReducer } from './favorites-reducer/favorites-reducer';

export enum NameSpace {
  data = 'DATA',
  app = 'APP',
  user = 'USER',
  reviews = 'REVIEWS',
  favorites = 'FAVORITES',
}

export const rootReducer = combineReducers({
  [NameSpace.app]: appReducer,
  [NameSpace.data]: offersReducer,
  [NameSpace.reviews]: reviewsReducer,
  [NameSpace.user]: userReducer,
  [NameSpace.favorites]: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
