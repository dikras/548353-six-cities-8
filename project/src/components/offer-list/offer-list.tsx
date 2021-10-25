import Offer from '../offer/offer';
import { OffersType } from '../../types/offer';
import { useState } from 'react';

type OffersProps = {
  offers: OffersType;
}

const NON_ACTIVE_ID = 0;

function OffersList(props: OffersProps): JSX.Element {
  const { offers } = props;
  const [activeCardId, setActiveCardId] = useState(NON_ACTIVE_ID);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        const onMouseOver = () => {
          setActiveCardId(offer.id);
        };
        const onMouseLeave = () => {
          setActiveCardId(0);
        };
        return (
          <Offer
            key={keyValue}
            offer={offer}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            isActive={activeCardId !== NON_ACTIVE_ID}
          />
        );
      })}
    </div>
  );
}

export default OffersList;
