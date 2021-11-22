import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {ThunkAppDispatch} from '../../types/action';
import {State} from '../../types/state';
import {logoutAction} from '../../store/api-actions';
import Logo from '../logo/logo';
import React from 'react';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';

type HeaderProps = {
  isMainScreen: boolean;
  isSigninScreen: boolean;
}

const mapStateToProps = (state: State) => ({
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSignoutClick() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = HeaderProps & PropsFromRedux

function Header(props: ConnectedComponentProps): JSX.Element {
  const {isMainScreen, isSigninScreen, authorizationStatus, user, onSignoutClick} = props;
  const isSignedIn = authorizationStatus === AuthorizationStatus.Auth;

  const handleSignoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onSignoutClick();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainScreen={isMainScreen}/>
          </div>
          {!isSigninScreen &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isSignedIn ?
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${user?.avatarUrl})`}}></div>
                        <span className="header__user-name user__name">{user?.email}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link to={AppRoute.Main} className="header__nav-link" onClick={handleSignoutClick}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </ul> :
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link to={AppRoute.SignIn} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  </ul>}
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export {Header};
export default connector(Header);
