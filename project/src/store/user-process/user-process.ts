import { UserProcess } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { Actions, ActionType } from '../../types/action';

const initialState: UserProcess = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch(action.type) {
    case ActionType.UserLogin:
      return {
        ...state,
        user: action.payload,
        authorizationStatus: AuthorizationStatus.Auth,
      };
    case ActionType.UserLogout:
      return {
        ...state,
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};

export {userProcess};
