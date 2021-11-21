import {ThunkActionResult} from '../types/action';
import {loadOffers, loadOffersNear, redirectToRoute, userLogout, userLogin, loadReviews, loadOffer, loadOfferFull, loadOfferError, postReview} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, WarningMessage, ReviewStatus} from '../const';
import {OfferServerType} from '../types/offer';
import {AuthData} from '../types/auth-data';
import {UserServerType} from '../types/user';
import {adaptOfferToClent, adaptUserToClient, adaptReviewToClient } from '../utils';
import {toast} from 'react-toastify';
import { ReviewServerType, ReviewPostType } from '../types/review';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferServerType[]>(APIRoute.Offers);
    dispatch(loadOffers(data.map((offer) => adaptOfferToClent(offer))));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(APIRoute.Login);
      if (response.status === 200) {
        dispatch(userLogin(adaptUserToClient(response.data)));
      }
    } catch {
      toast.info(WarningMessage.AuthFail);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post<UserServerType>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(userLogin(adaptUserToClient(data)));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      toast.warn(WarningMessage.SigninFail);
    }
  };

export const fetchReviewsAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ReviewServerType[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data.map((review) => adaptReviewToClient(review))));
  };

export   const fetchOffersNear = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferServerType[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadOffersNear(data.map((offer) => adaptOfferToClent(offer))));
  };

export const fetchOffer = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOffer());
    try {
      const {data} = await api.get<OfferServerType>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOfferFull(adaptOfferToClent(data)));
    } catch {
      dispatch(loadOfferError());
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(userLogout());
  };

export  const uploadReview = ({comment, rating} : ReviewPostType, id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(postReview(ReviewStatus.Uploading));
    try {
      await api.post<ReviewServerType[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
      const {data} = await api.get<ReviewServerType[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadReviews(data.map((review)=> adaptReviewToClient(review))));
      dispatch(postReview(ReviewStatus.Uploaded));
    }
    catch {
      dispatch(postReview(ReviewStatus.NotUploaded));
      toast.warn(WarningMessage.ReviewPostFail);
    }
  };
