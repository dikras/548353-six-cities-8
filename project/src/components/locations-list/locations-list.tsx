const INITIAL_ACTIVE_CITY = 'Paris';

type LocationsListProps = {
  cities: string[];
}

function LocationsList(props: LocationsListProps): JSX.Element {
  const { cities } = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, id) => {
        const keyValue = `${city}-${id}`;
        return (
          <li className="locations__item" key={keyValue}>
            <a className={`locations__item-link tabs__item ${city === INITIAL_ACTIVE_CITY ? 'tabs__item--active' : ''}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default LocationsList;
