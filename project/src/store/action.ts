import { ActionType } from '../types/action';
import { OffersType, OfferType } from '../types/offer';
import { AppRoute, AuthorizationStatus, ReviewStatus, CityName, SortingType } from '../const';
import { User } from '../types/user';
import { ReviewsType } from '../types/review';
import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction(
  ActionType.ChangeCity,
  (city: CityName) => ({
    payload: city,
  }),
);

export const changeSorting = createAction(
  ActionType.ChangeSorting,
  (sortingType: SortingType) => ({
    payload: sortingType,
  }),
);

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: OffersType) => ({
    payload: offers,
  }),
);

export const updateOffers = createAction(
  ActionType.UpdateOffers,
  (offer: OfferType) => ({
    payload: offer,
  }),
);

export const updateOffer = createAction(
  ActionType.UpdateOffer,
  (offer: OfferType) => ({
    payload: offer,
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const userLogin = createAction(
  ActionType.UserLogin,
  (user: User) => ({
    payload: user,
  }),
);

export const userLogout = createAction(ActionType.UserLogout);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: ReviewsType) => ({
    payload: reviews,
  }),
);

export const loadOffersNear = createAction(
  ActionType.LoadOffersNear,
  (offers: OffersType) => ({
    payload: offers,
  }),
);

export const loadOffer = createAction(ActionType.LoadOffer);

export const loadOfferFull = createAction(
  ActionType.LoadOfferFull,
  (offer: OfferType) => ({
    payload: offer,
  }),
);

export const loadOfferError = createAction(ActionType.LoadOfferError);

export const postReview = createAction(
  ActionType.PostReview,
  (postReviewStatus: ReviewStatus) => ({
    payload: postReviewStatus,
  }),
);

export const loadFavoriteOffers = createAction(
  ActionType.LoadFavoriteOffers,
  (offers: OffersType) => ({
    payload: offers,
  }),
);

export const updateFavoriteOffers = createAction(
  ActionType.UpdateFavoriteOffers,
  (offer: OfferType) => ({
    payload: offer,
  }),
);

export const updateOffersNear = createAction(
  ActionType.UpdateOffersNear,
  (offer: OfferType) => ({
    payload: offer,
  }),
);
