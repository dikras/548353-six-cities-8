import Offer from '../offer/offer';
import { OffersType } from '../../types/offer';

type OffersListProps = {
  offers: OffersType;
  cardType: string,
  onFavoriteClick?: (offerId: number, isFavorite: boolean) => void;
  onOfferCardHover?: (offerId: number) => void;
  onOfferCardLeave?: () => void;
}

function OffersList(props: OffersListProps): JSX.Element {
  const { offers, onFavoriteClick, onOfferCardHover, onOfferCardLeave, cardType } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        return (
          <Offer
            key={keyValue}
            offer={offer}
            onMouseOver={onOfferCardHover}
            onMouseLeave={onOfferCardLeave}
            onFavoriteClick={onFavoriteClick}
            cardType={cardType}
          />
        );
      })}
    </div>
  );
}

export default OffersList;
