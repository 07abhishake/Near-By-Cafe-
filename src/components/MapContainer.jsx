import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cafes } from "../data/cafes";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MapComponent({ selectedCafe }) {
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = [pos.coords.latitude, pos.coords.longitude];
      setUserLocation(coords);

      if (mapRef.current) {
        mapRef.current.setView(coords, 15);
      }
    });
  }, []);


  useEffect(() => {
    if (selectedCafe && mapRef.current) {
      mapRef.current.setView([selectedCafe.lat, selectedCafe.lng], 16);
    }
  }, [selectedCafe]);

  return (
    <MapContainer
      center={userLocation || [18.5246, 73.8786]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-[600px] w-full rounded-lg"
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

  
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>You are here</Popup>
        </Marker>
      )}


      {cafes.map((cafe) => (
        <Marker key={cafe.id} position={[cafe.lat, cafe.lng]}>
          <Popup>{cafe.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
