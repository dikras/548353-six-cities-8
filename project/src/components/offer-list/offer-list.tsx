import Offer from '../offer/offer';
import { OffersType } from '../../types/offer';

type OffersProps = {
  offers: OffersType;
  nearPlacesSection: boolean;
  onOfferCardHover?: (offerId: number) => void;
  onOfferCardLeave?: () => void;
}

function OffersList(props: OffersProps): JSX.Element {
  const { offers, onOfferCardHover, onOfferCardLeave, nearPlacesSection } = props;

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
            nearPlacesSection={nearPlacesSection}
          />
        );
      })}
    </div>
  );
}

export default OffersList;
