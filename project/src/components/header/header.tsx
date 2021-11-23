import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {logoutAction} from '../../store/api-actions';
import Logo from '../logo/logo';
import React from 'react';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';

type HeaderProps = {
  isMainScreen: boolean;
  isSigninScreen: boolean;
}

function Header(props: HeaderProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const user = useSelector(getUser);

  const { isMainScreen, isSigninScreen } = props;
  const isSignedIn = authorizationStatus === AuthorizationStatus.Auth;

  const dispatch = useDispatch();

  const handleSignoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
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

export default Header;
