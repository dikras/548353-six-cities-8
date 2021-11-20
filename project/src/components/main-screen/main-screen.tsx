/* eslint-disable no-console */
/* eslint-disable no-debugger */
import { useState } from 'react';
import OffersList from '../offer-list/offer-list';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import { changeCity } from '../../store/action';
import { CityName, SortingType } from '../../const';
import SortingForm from '../sorting-form/sorting-form';
import { OfferType } from '../../types/offer';
import Header from '../header/header';

const mapStateToProps = ({currentCity, offers, currentSortingOption, authorizationStatus}: State) => ({
  currentCity,
  offers,
  currentSortingOption,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityClick(city: CityName) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const { currentCity, offers, currentSortingOption, onCityClick } = props;
  const cityOffers = offers.filter((offer) => offer.city.name === currentCity);
  const [firstCity] = cityOffers;
  const cityLocation = firstCity.city.location;
  const cityPoints = cityOffers.map((offer) => (
    {
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    }
  ));
  const [selectedCard, setSelectedCard] = useState<OfferType | null>(null);

  const onOfferCardHover = (offerId: number) => {
    const currentCard = offers.find((offer) => offer.id === offerId);
    setSelectedCard(currentCard ? currentCard : null);
  };

  const onOfferCardLeave = () => {
    setSelectedCard(null);
  };

  switch (currentSortingOption) {
    case SortingType.HighToLow:
      cityOffers.sort((a, b) => b.price - a.price);
      break;
    case SortingType.LowToHigh:
      cityOffers.sort((a, b) => a.price - b.price);
      break;
    case SortingType.TopRatedFirst:
      cityOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return (
    <div className="page page--gray page--main">
      <Header isMainScreen isSigninScreen={false} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList currentCity={currentCity} onCityClick={onCityClick} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {currentCity}</b>
              <SortingForm />
              <OffersList
                offers={cityOffers}
                onOfferCardHover={onOfferCardHover}
                onOfferCardLeave={onOfferCardLeave}
                nearPlacesSection={false}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityLocation} points={cityPoints} selectedPoint={selectedCard} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
