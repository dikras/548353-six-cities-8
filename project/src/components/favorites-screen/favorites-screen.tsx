import Header from '../header/header';
import { Link } from 'react-router-dom';
import { CardType, AppRoute, CityName } from '../../const';
import { getOffersFavorite, getPlaces, getIsOffersFavoriteLoaded } from '../../store/favorites-reducer/selectors';
import { toggleFavoriteStatus, fetchFavorites } from '../../store/api-actions';
import { updateFavoriteOffers, changeCity } from '../../store/action';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoritesEmptyScreen from './favorites-screen-empty';
import OffersList from '../offer-list/offer-list';

function FavoritesScreen(): JSX.Element {
  const offersFavorite = useSelector(getOffersFavorite);
  const isOffersFavoriteLoaded = useSelector(getIsOffersFavoriteLoaded);
  const places = useSelector(getPlaces);

  const hasNoOffersFavorite = offersFavorite.length === 0;

  const dispatch = useDispatch();

  const handleFavoriteClick = (offerId: number, isFavorite: boolean) => {
    dispatch(toggleFavoriteStatus(
      offerId,
      isFavorite,
      (updatedOffer) => {
        dispatch(updateFavoriteOffers(updatedOffer));
      },
    ));
  };

  const handleChangeCity = (city: CityName) => {
    dispatch(changeCity(city));
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  },[dispatch]);

  const renderOffersFavorite = () => (
    <div className="page__favorites-container container">
      {hasNoOffersFavorite ?
        <FavoritesEmptyScreen /> :
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {places.map((place, id) => {
              const cityOffers = offersFavorite.filter((offer) => offer.city.name === place);
              const keyValue = `${place}-${id}`;
              return (
                <li key={keyValue} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link
                        to={AppRoute.Main}
                        className="locations__item-link" href="#/"
                        onClick={() => {
                          handleChangeCity(place as CityName);
                        }}
                      >
                        <span>{place}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OffersList
                      offers={cityOffers}
                      onFavoriteClick={handleFavoriteClick}
                      cardType={CardType.Favorite}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>}
    </div>
  );

  return (
    <div className={`page ${hasNoOffersFavorite ? 'page--favorites-empty' : ''}`}>
      <Header isMainScreen={false} isSigninScreen={false} />
      <main className={`page__main page__main--favorites ${hasNoOffersFavorite ? 'page__main--favorites-empty' : ''}`}>
        {!isOffersFavoriteLoaded ?
          <LoadingScreen /> :
          renderOffersFavorite()}
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Main} className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
