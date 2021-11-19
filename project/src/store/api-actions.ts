import {ThunkActionResult} from '../types/action';
import {loadOffers, redirectToRoute, userLogout, userLogin} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute} from '../const';
import {OfferServerType} from '../types/offer';
import {AuthData} from '../types/auth-data';
import {UserServerType} from '../types/user';
import {adaptOfferToClent, adaptUserToClient} from '../utils';
import {toast} from 'react-toastify';
import {AUTH_FAIL_MESSAGE, SIGNIN_FAIL_MESSAGE} from '../const';

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
      toast.info(AUTH_FAIL_MESSAGE);
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
      toast.warn(SIGNIN_FAIL_MESSAGE);
    }
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(userLogout());
  };
