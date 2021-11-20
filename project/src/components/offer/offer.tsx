/* eslint-disable no-console */
import { OfferType } from '../../types/offer';
import { Link } from 'react-router-dom';

type OfferProps = {
  offer: OfferType;
  nearPlacesSection: boolean;
  onMouseOver?: (offerId: number) => void;
  onMouseLeave?: () => void;
};

function Offer(props: OfferProps): JSX.Element {
  const { offer, onMouseOver, onMouseLeave, nearPlacesSection } = props;
  const { isFavorite, isPremium, previewImage, price, title, type } = offer;

  const handleMouseOver = () => {
    onMouseOver && onMouseOver(offer.id);
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  return (
    <article
      className={`${nearPlacesSection ? 'near-places__card' : 'cities__place-card'} place-card`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`} title="/offer/id">
          <img className="place-card__image" src={ previewImage } width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} title="/offer/id">{ title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default Offer;
