import Offer from '../offer/offer';
import { OffersType } from '../../types/offer';

type OffersProps = {
  offers: OffersType;
}

function OffersList(props: OffersProps): JSX.Element {
  const { offers } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        return (
          <Offer key={ keyValue } offer={ offer } />
        );
      })}
    </div>
  );
}

export default OffersList;
