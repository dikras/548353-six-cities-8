import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user-reducer/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const { exact, path, render } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
