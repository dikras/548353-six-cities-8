import { CityName } from '../../const';

type LocationsListProps = {
  currentCity: string;
  onCityClick: (city: CityName) => void;
}

function LocationsList(props: LocationsListProps): JSX.Element {
  const { currentCity, onCityClick } = props;

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityName).map((city, id) => {
        const keyValue = `${city}-${id}`;
        const isCurrent = currentCity === city;
        return (
          <li className="locations__item" key={keyValue}>
            <a
              className={`locations__item-link tabs__item ${isCurrent ? 'tabs__item--active' : ''}`}
              href="#/"
              onClick={(evt) => {
                evt.preventDefault();
                onCityClick(city);
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default LocationsList;
