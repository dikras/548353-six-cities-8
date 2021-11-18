/* eslint-disable no-console */
/* eslint-disable no-debugger */
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { ReviewsType } from '../../types/review';
import LoadingScreen from '../loading-screen/loading-screen';
import { State } from '../../types/state';

type AppScreenProps = {
  reviews: ReviewsType;
}

const mapStateToProps = ({authorizationStatus, isDataLoaded, offers}: State) => ({
  authorizationStatus,
  isDataLoaded,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & AppScreenProps;

function App(props: ConnectedComponentProps): JSX.Element {
  debugger;
  const { reviews, offers, isDataLoaded } = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
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
          render={() => <FavoritesScreen offers = {offers} />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen
            offers = {offers}
            reviews = {reviews}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
