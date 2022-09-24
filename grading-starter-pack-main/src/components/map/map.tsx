import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map/use-map';
import icon from '../../assets/img/icon-blip.svg';

type mapProps = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  },
};

function Map(props: mapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: icon,
    iconSize: [56, 70],
    iconAnchor: [28, 70],
  });

  useEffect(() => {
    if (map) {
      leaflet
          .marker({
            lat: props.location.latitude,
            lng: props.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      map.setView([props.location.latitude, props.location.longitude]);
    }
  }, [map]);

  return (
    <div
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
