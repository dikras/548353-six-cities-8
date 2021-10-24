import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { OffersType } from '../../types/offer';
import { ReviewsType } from '../../types/review';
import { City, Points } from '../../types/map-points';

type AppScreenProps = {
  offersCount: number;
  offers: OffersType;
  reviews: ReviewsType;
  city: City;
  points: Points;
}

function App({ offersCount, offers, reviews, city, points }: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ AppRoute.Main }>
          <MainScreen
            offersCount = {offersCount}
            offers = {offers}
            city = {city}
            points={points}
          />
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

export default App;
