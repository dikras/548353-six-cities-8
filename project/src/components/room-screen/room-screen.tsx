/* eslint-disable no-console */
// import { OfferType } from '../../types/offer';
import { useParams } from 'react-router-dom';
import Review from '../review/review';
import CommentForm from '../comment-form/comment-form';
import Header from '../header/header';
import { OFFER_IMAGES_COUNT, AuthorizationStatus } from '../../const';
import Map from '../map/map';
import OffersList from '../offer-list/offer-list';
import React, { useMemo, useEffect } from 'react';
import { getRating } from '../../utils';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { fetchReviewsAction, fetchOffersNear, fetchOffer } from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found/not-found';
import { REVIEWS_COUNT } from '../../const';

const mapStateToProps = ({authorizationStatus, isDataLoaded, isOfferLoading, isOfferError, offer, reviews, offersNear, isReviewsLoaded, isOffersNearLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
  offer,
  reviews,
  offersNear,
  isReviewsLoaded,
  isOffersNearLoaded,
  isOfferLoading,
  isOfferError,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handleFetchReviews: (id: string) => dispatch(fetchReviewsAction(id)),
  handleFetchOffersNear: (id: string) => dispatch(fetchOffersNear(id)),
  handleFetchOffer: (id: string) => dispatch(fetchOffer(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function RoomScreen(props: PropsFromRedux): JSX.Element {
  const { authorizationStatus, isOfferLoading, reviews, offersNear, offer, isReviewsLoaded, isOffersNearLoaded, isOfferError, handleFetchReviews, handleFetchOffersNear, handleFetchOffer } = props;
  const { id } = useParams<{ id: string }>();

  const pointsNear = offersNear.map((offerNear) => (
    {
      lat: offerNear.location.latitude,
      lng: offerNear.location.longitude,
    }
  ));

  useEffect(() => {
    handleFetchReviews(id);
    handleFetchOffersNear(id);
    handleFetchOffer(id);
  },[handleFetchReviews, handleFetchOffersNear, handleFetchOffer, id]);

  const reviewsRecieved = useMemo(() =>
    [...reviews]
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, REVIEWS_COUNT),
  [reviews]);

  const renderOffer = () => {
    if (isOfferLoading) {
      return <LoadingScreen />;
    }

    if (offer) {
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
      } = offer;

      return (
        <React.Fragment>
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
                    <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
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
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
                  {isReviewsLoaded ?
                    <ul className="reviews__list">
                      {reviewsRecieved.map((review) => {
                        const keyValue = `${review.id}`;
                        return (
                          <Review key={ keyValue } review={ review } />
                        );
                      })}
                    </ul> : <LoadingScreen />}
                  {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm id={id} /> : ''}
                </section>
              </div>
            </div>
            {isOffersNearLoaded ? <Map city={offer.city.location} points={pointsNear} selectedPoint={offer} /> : <LoadingScreen />}
          </section>
          {isOffersNearLoaded ?
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OffersList
                    offers={offersNear}
                    isNearPlacesSection
                  />
                </div>
              </section>
            </div> : <LoadingScreen />}
        </React.Fragment>
      );
    }
  };

  return (
    <div>
      {isOfferError ?
        <NotFoundScreen /> :
        <div className="page">
          <Header isMainScreen={false} isSigninScreen={false} />
          <main className="page__main page__main--property">
            {renderOffer()}
          </main>
        </div>}
    </div>
  );
}

export {RoomScreen};
export default connector(RoomScreen);
