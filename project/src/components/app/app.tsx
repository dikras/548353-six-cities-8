import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found/not-found';
// import {AppRoute, AuthorizationStatus} from '../../const';
import {AppRoute} from '../../const'; //delete then
// import PrivateRoute from '../private-route/private-route';
import { OffersType } from '../../types/offer';
import { ReviewsType } from '../../types/review';

type AppScreenProps = {
  offersCount: number;
  offers: OffersType;
  reviews: ReviewsType;
}

function App({ offersCount, offers, reviews }: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ AppRoute.Main }>
          <MainScreen
            offersCount = { offersCount }
            offers = { offers }
          />
        </Route>
        <Route exact path={ AppRoute.SignIn }>
          <SignInScreen />
        </Route>
        <Route
          exact
          path={ AppRoute.Favorites }
          render={() => <FavoritesScreen offers = { offers } />}
          // authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </Route>
        <Route exact path={ AppRoute.Room }>
          <RoomScreen
            offer = { offers[0] }
            reviews = { reviews }
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
