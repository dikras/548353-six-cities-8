/* eslint-disable no-console */
/* eslint-disable no-debugger */
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found/not-found';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { State } from '../../types/state';
import browserHistory from '../../browser-history';
import { ThunkAppDispatch } from '../../types/action';
import { fetchReviewsAction } from '../../store/api-actions';

const mapStateToProps = ({authorizationStatus, isDataLoaded, offers, currentCity, reviews}: State) => ({
  authorizationStatus,
  isDataLoaded,
  offers,
  currentCity,
  reviews,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handleFetchReviews: (id: string) => dispatch(fetchReviewsAction(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { reviews, offers, isDataLoaded, currentCity } = props;
  console.log(reviews);

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
          render={() => <FavoritesScreen offers = {offers} />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen
            offers = {offers}
            reviews = {reviews}
            city={currentCity}
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
