import Header from '../header/header';
import { useRef, FormEvent } from 'react';
import { loginAction } from '../../store/api-actions';
import { getCurrentCity } from '../../store/app-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { AuthorizationStatus, AppRoute, CityName } from '../../const';
import { Redirect } from 'react-router';
import { validateEmail, validatePassword } from '../../utils';
import { Link } from 'react-router-dom';
import { changeCity } from '../../store/action';

function SignInScreen(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Redirect to={AppRoute.Main}/>;
  }

  const handleChangeCity = (city: CityName) => {
    dispatch(changeCity(city));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const handleInputChange = (evt: FormEvent<HTMLFormElement>) => {
    if (evt.target === loginRef.current) {
      loginRef.current.setCustomValidity(validateEmail(loginRef.current.value));
      loginRef.current.reportValidity();
    }
    if (evt.target === passwordRef.current) {
      passwordRef.current.setCustomValidity(validatePassword(passwordRef.current.value));
      passwordRef.current.reportValidity();
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header isMainScreen={false} isSigninScreen />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
              onChange={handleInputChange}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                to={AppRoute.Main}
                className="locations__item-link" href="#/"
                onClick={() => {
                  handleChangeCity(currentCity);
                }}
              >
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SignInScreen;
