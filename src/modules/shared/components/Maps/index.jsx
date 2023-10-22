import GoogleMap from "google-maps-react-markers";
import { useEffect, useRef, useState } from "react";
import Marker from "./Marker";
import { classNames } from "../../utils";

function Maps({ businesses, region, hoveredBusiness, onHover, offset }) {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const panMapTo = (coordinates) => {
    if (mapRef.current) {
      mapRef.current.panTo(coordinates);
    }
  };

  useEffect(() => {
    if (mapReady && businesses.length) {
      const { latitude, longitude } = region.center;
      panMapTo({ lat: latitude, lng: longitude });
    }
  }, [businesses, mapReady, region.center]);

  const onGoogleApiLoaded = ({ map }) => {
    mapRef.current = map;
    const { latitude, longitude } = region.center;
    mapRef.current.setCenter({ lat: latitude, lng: longitude });
    setMapReady(true);
  };

  const onMarkerClick = (business) => {
    panMapTo(business.coordinates);
  };

  const getMarkerClassName = (business) => {
    const baseClasses =
      "w-8 h-8 text-[12px] flex items-center justify-center rounded-full relative font-medium";
    const hoveredClasses =
      hoveredBusiness?.id === business.id
        ? "text-red-500 bg-white border-[2px] border-red-500 z-[999]"
        : "text-white bg-red-500 border-white border-[2px] z-0";
    return classNames(baseClasses, hoveredClasses);
  };

  return (
    <GoogleMap
      apiKey={import.meta.env.VITE_MAPS_API_KEY}
      defaultCenter={{
        lat: region.center.latitude,
        lng: region.center.longitude,
      }}
      defaultZoom={12}
      options={{ disableDefaultUI: true, zoomControl: false }}
      onGoogleApiLoaded={onGoogleApiLoaded}
    >
      {businesses.map((business, index) => (
        <Marker
          key={business.coordinates.latitude}
          lat={business.coordinates.latitude}
          lng={business.coordinates.longitude}
          text={offset + index + 1}
          business={business}
          onClick={onMarkerClick}
          onHover={onHover}
          zIndex={hoveredBusiness?.id === business.id ? 10 : 0}
          className={getMarkerClassName(business)}
        />
      ))}
    </GoogleMap>
  );
}

export default Maps;
