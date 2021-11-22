import { ActionType } from '../types/action';
import { OffersType, OfferType } from '../types/offer';
import { AppRoute, AuthorizationStatus, ReviewStatus } from '../const';
import { User } from '../types/user';
import { ReviewsType } from '../types/review';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSorting = (sortingType: string) => ({
  type: ActionType.ChangeSorting,
  payload: sortingType,
} as const);

export const loadOffers = (offers: OffersType) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const updateOffers = (offer: OfferType) => ({
  type: ActionType.UpdateOffers,
  payload: offer,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const userLogin = (user: User) => ({
  type: ActionType.UserLogin,
  payload: user,
} as const);

export const userLogout = () => ({
  type: ActionType.UserLogout,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export const loadReviews = (reviews: ReviewsType) => ({
  type: ActionType.LoadReviews,
  payload: reviews,
} as const);

export const loadOffersNear = (offers: OffersType) => ({
  type: ActionType.LoadOffersNear,
  payload: offers,
} as const);

export const loadOffer = () => ({
  type: ActionType.LoadOffer,
} as const);

export const loadOfferFull = (offer: OfferType) => ({
  type: ActionType.LoadOfferFull,
  payload: offer,
} as const);

export const loadOfferError = () => ({
  type: ActionType.LoadOfferError,
} as const);

export const postReview = (postReviewStatus: ReviewStatus) => ({
  type: ActionType.PostReview,
  payload: postReviewStatus,
} as const);
