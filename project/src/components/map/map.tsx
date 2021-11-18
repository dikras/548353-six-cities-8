/* eslint-disable no-console */
import {useRef, useEffect} from 'react';
import {Icon, LayerGroup, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Points} from '../../types/map-points';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, IconSize} from '../../const';
import { OfferType } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Points;
  selectedPoint?: OfferType | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [IconSize.CUSTOM_WIDTH, IconSize.CUSTOM_HEIGHT],
  iconAnchor: [IconSize.ANCHOR_WIDTH, IconSize.ANCHOR_HEIGHT],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [IconSize.CUSTOM_WIDTH, IconSize.CUSTOM_HEIGHT],
  iconAnchor: [IconSize.ANCHOR_WIDTH, IconSize.ANCHOR_HEIGHT],
});

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerGroup = useRef<LayerGroup>();

  useEffect(() => {
    if (map) {
      markerGroup.current?.clearLayers();
      markerGroup.current = new LayerGroup().addTo(map);

      const {latitude, longitude, zoom} = city;
      map.flyTo([latitude, longitude], zoom, {
        animate: true,
        duration: 2,
      });

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            (selectedPoint?.location.latitude === point.lat &&
              selectedPoint?.location.longitude === point.lng) ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerGroup.current as LayerGroup);
      });
    }
  }, [map, city, points, selectedPoint]);

  return <div style={{height: '667px'}} ref={mapRef}></div>;
}

export default Map;
