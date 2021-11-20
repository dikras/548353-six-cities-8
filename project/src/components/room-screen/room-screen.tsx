/* eslint-disable no-console */
import { OfferType } from '../../types/offer';
import { useParams } from 'react-router-dom';
import Review from '../review/review';
import CommentForm from '../comment-form/comment-form';
import Header from '../header/header';
import { OFFER_IMAGES_COUNT, OFFERS_NEARBY_COUNT } from '../../const';
import Map from '../map/map';
import OffersList from '../offer-list/offer-list';
import { useState } from 'react';
import { getRating } from '../../utils';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { fetchReviewsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import {connect, ConnectedProps} from 'react-redux';

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

function RoomScreen(props: PropsFromRedux): JSX.Element {
  const { offers, reviews, currentCity, handleFetchReviews } = props;

  const { id } = useParams<{ id: string }>();

  const nearCityOffers = offers.filter((offer) => offer.city.name === currentCity);
  const currentOffer = offers.find((offer) => offer.id.toString() === id) as OfferType;
  const {
    title,
    images,
    isPremium,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = currentOffer;
  const nearOffers = nearCityOffers.slice(0, OFFERS_NEARBY_COUNT);
  const [firstNearOffer] = nearOffers;
  const cityLocation = firstNearOffer.city.location;
  const nearbyPoints = nearOffers.map((offer) => (
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

  useEffect(() => {handleFetchReviews(id);},[handleFetchReviews, id]);

  return (
    <div className="page">
      <Header isMainScreen={false} isSigninScreen={false} />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, OFFER_IMAGES_COUNT).map((image, index) => {
                const keyValue = `${index}-${image}`;
                return (
                  <div key={keyValue} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  { title }
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRating(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ rating }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  { type[0].toUpperCase() + type.slice(1) }
                </li>
                <li className="property__feature property__feature--bedrooms">
                  { bedrooms } Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max { maxAdults } adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{ price }</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, index) => {
                    const keyValue = `${index}-${good}`;
                    return (
                      <li key={keyValue} className="property__inside-item">
                        { good }
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={ host.avatarUrl } width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    { host.name }
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    { description }
                  </p>
                  <p className="property__text">
                    { description }
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => {
                    const keyValue = `${review.id}`;
                    return (
                      <Review key={ keyValue } review={ review } />
                    );
                  })}
                </ul>
                <CommentForm />
              </section>
            </div>
          </div>
          <Map city={cityLocation} points={nearbyPoints} selectedPoint={selectedCard} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={nearOffers}
                onOfferCardHover={onOfferCardHover}
                onOfferCardLeave={onOfferCardLeave}
                isNearPlacesSection
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {RoomScreen};
export default connector(RoomScreen);
