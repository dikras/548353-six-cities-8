import { OfferType } from '../../types/offer';
import { Link } from 'react-router-dom';
import { CardType, CardImageSize } from '../../const';

type OfferProps = {
  offer: OfferType;
  cardType: string;
  onFavoriteClick?: (offerId: number, isFavorite: boolean) => void;
  onMouseOver?: (offerId: number) => void;
  onMouseLeave?: () => void;
};

function Offer(props: OfferProps): JSX.Element {
  const { offer, onFavoriteClick, onMouseOver, onMouseLeave, cardType } = props;
  const { isFavorite, id, isPremium, previewImage, price, title, type } = offer;

  const isFavoriteCard = cardType === CardType.Favorite;
  const isCitiesCard = cardType === CardType.City;
  const isNearPlacesSection = cardType === CardType.Near;

  const handleFavoriteClick = () => {
    if (onFavoriteClick) {
      onFavoriteClick(id, isFavorite);
    }
  };

  const handleMouseOver = () => {
    if (onMouseOver) {
      onMouseOver(offer.id);
    }
  };

  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <article
      className={`place-card ${isCitiesCard ? 'cities__place-card' : ''} ${isNearPlacesSection ? 'near-places__card' : ''} ${isFavoriteCard ? 'favorites__card' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`place-card__image-wrapper ${isCitiesCard ? 'cities__image-wrapper' : ''} ${isFavoriteCard ? 'favorites__image-wrapper' : ''}`}>
        <img className="place-card__image"
          src={previewImage}
          width={!isFavoriteCard ? CardImageSize.main.width : CardImageSize.favorite.width}
          height={!isFavoriteCard ? CardImageSize.main.height : CardImageSize.favorite.height}
          alt="Place"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={handleFavoriteClick}>
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
