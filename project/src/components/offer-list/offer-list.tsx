import Offer from '../offer/offer';
import { OffersType } from '../../types/offer';

type OffersProps = {
  offers: OffersType;
  isNearPlacesSection: boolean;
  onFavoriteClick?: (offerId: number, isFavorite: boolean) => void;
  onOfferCardHover?: (offerId: number) => void;
  onOfferCardLeave?: () => void;
}

function OffersList(props: OffersProps): JSX.Element {
  const { offers, onFavoriteClick, onOfferCardHover, onOfferCardLeave, isNearPlacesSection } = props;

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
            isNearPlacesSection={isNearPlacesSection}
            onFavoriteClick={onFavoriteClick}
          />
        );
      })}
    </div>
  );
}

export default OffersList;
