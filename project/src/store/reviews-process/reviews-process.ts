import { createReducer } from '@reduxjs/toolkit';
import { ReviewsProcess } from '../../types/state';
import { ReviewStatus } from '../../const';
import { loadReviews, postReview } from '../action';

const initialState: ReviewsProcess = {
  reviews: [],
  isReviewsLoaded: false,
  reviewStatus: ReviewStatus.Unknown,
  isPostReviewError: false,
};

const reviewsProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoaded = true;
    })
    .addCase(postReview, (state, action) => {
      state.reviewStatus = action.payload;
    });
});

export {reviewsProcess};
