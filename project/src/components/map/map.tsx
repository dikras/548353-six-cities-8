import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Points} from '../../types/map-points';
import {URL_MARKER_DEFAULT, IconSize} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Points;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [IconSize.CUSTOM_WIDTH, IconSize.CUSTOM_HEIGHT],
  iconAnchor: [IconSize.ANCHOR_WIDTH, IconSize.ANCHOR_HEIGHT],
});

function Map(props: MapProps): JSX.Element {
  const {city, points} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{height: '667px'}} ref={mapRef}></div>;
}

export default Map;
