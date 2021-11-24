import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { useSelector } from 'react-redux';
import browserHistory from '../../browser-history';
import { getIsDataLoaded } from '../../store/offers-data/selectors';

function App(): JSX.Element {
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={ AppRoute.Main }>
          <MainScreen />
        </Route>
        <Route exact path={ AppRoute.SignIn }>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
