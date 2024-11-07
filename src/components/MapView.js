// components/MapView.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Personalización de ícono de marcador
const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41]
});

function MapView({ centers }) {
  return (
    <MapContainer
      center={[-34.603722, -58.381592]} // Coordenadas de Buenos Aires (ejemplo)
      zoom={12}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {centers.map((center) => (
        <Marker
          key={center.id}
          position={[center.latitude, center.longitude]}
          icon={icon}
        >
          <Popup>
            <h3>{center.name}</h3>
            <p>{center.address}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
