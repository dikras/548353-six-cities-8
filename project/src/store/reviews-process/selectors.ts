import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {ReviewStatus} from '../../const';
import { ReviewsType } from '../../types/review';

export const getReviews = (state: State): ReviewsType => state[NameSpace.reviews].reviews;
export const getReviewsStatus = (state: State): ReviewStatus => state[NameSpace.reviews].reviewStatus;
export const getIsReviewsLoaded = (state: State): boolean => state[NameSpace.reviews].isReviewsLoaded;
