import {  ReviewsProcess } from '../../types/state';
import { ReviewStatus } from '../../const';
import { Actions, ActionType } from '../../types/action';

const initialState: ReviewsProcess = {
  reviews: [],
  isReviewsLoaded: false,
  reviewStatus: ReviewStatus.Unknown,
  isPostReviewError: false,
};

const reviewsProcess = (state = initialState, action: Actions): ReviewsProcess => {
  switch(action.type) {
    case ActionType.LoadReviews:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true,
      };
    case ActionType.PostReview:
      return {...state, reviewStatus: action.payload};
    default:
      return state;
  }
};

export {reviewsProcess};
