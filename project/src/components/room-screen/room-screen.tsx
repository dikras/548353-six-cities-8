import { useParams } from 'react-router-dom';
import Review from '../review/review';
import { useSelector, useDispatch } from 'react-redux';
import CommentForm from '../comment-form/comment-form';
import Header from '../header/header';
import Map from '../map/map';
import { useHistory } from 'react-router';
import OffersList from '../offer-list/offer-list';
import React, { useMemo, useEffect } from 'react';
import { getRating } from '../../utils';
import { fetchReviewsAction, fetchOffersNear, fetchOffer, toggleFavoriteStatus } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { DataCount, CardType, AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-reducer/selectors';
import { getOffer, getOffersNear, getIsOffersNearLoaded, getIsOfferLoading, getIsOfferError } from '../../store/offers-reducer/selectors';
import { getReviews, getIsReviewsLoaded } from '../../store/reviews-reducer/selectors';
import { updateOffer } from '../../store/action';

function RoomScreen(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offer = useSelector(getOffer);
  const reviews = useSelector(getReviews);
  const offersNear = useSelector(getOffersNear);
  const isReviewsLoaded = useSelector(getIsReviewsLoaded);
  const isOffersNearLoaded = useSelector(getIsOffersNearLoaded);
  const isOfferLoading = useSelector(getIsOfferLoading);
  const isOfferError = useSelector(getIsOfferError);

  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const history = useHistory();

  const pointsNear = offersNear.map((offerNear) => (
    {
      lat: offerNear.location.latitude,
      lng: offerNear.location.longitude,
    }
  ));

  useEffect(() => {
    dispatch(fetchReviewsAction(id));
    dispatch(fetchOffersNear(id));
    dispatch(fetchOffer(id));
  },[dispatch, id]);

  const reviewsRecieved = useMemo(() =>
    [...reviews]
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, DataCount.REVIEWS),
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
        isFavorite,
      } = offer;

      const handleFavoriteClick = () => {
        if (authorizationStatus !== AuthorizationStatus.Auth) {
          history.push(AppRoute.SignIn);
          return;
        }
        if (offer) {
          dispatch(toggleFavoriteStatus(
            offer.id,
            offer.isFavorite,
            (updatedOffer) => {
              dispatch(updateOffer(updatedOffer));
            },
          ));
        }
      };

      return (
        <React.Fragment>
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, DataCount.OFFER_IMAGE).map((image, index) => {
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
                    {title}
                  </h1>
                  <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button" onClick={handleFavoriteClick}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${getRating(rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type[0].toUpperCase() + type.slice(1)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
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
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    <span className="property__user-status">
                      {host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
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
                          <Review key={keyValue} review={ review } />
                        );
                      })}
                    </ul> : <LoadingScreen />}
                  {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm id={id} /> : ''}
                </section>
              </div>
            </div>
            {isOffersNearLoaded ? <Map city={offer.city.location} points={pointsNear} currentPoint={offer} /> : <LoadingScreen />}
          </section>
          {isOffersNearLoaded ?
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OffersList
                    offers={offersNear}
                    cardType={CardType.Near}
                    onFavoriteClick={handleFavoriteClick}
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

export default RoomScreen;
