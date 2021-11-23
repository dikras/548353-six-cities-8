import {createReducer} from '@reduxjs/toolkit';
import { UserProcess } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { userLogin, userLogout } from '../action';

const initialState: UserProcess = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(userLogin, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(userLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export {userProcess};
