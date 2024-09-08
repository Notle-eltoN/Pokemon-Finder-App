import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

function Raids() {
  const [raids, setRaids] = useState([]);

  useEffect(() => {
    // Fetch Raid data from backend
    axios.get('/api/raids')
      .then(response => setRaids(response.data))
      .catch(error => console.error("Error fetching Raid data", error));
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {raids.map(raid => (
        <Marker key={raid.id} position={[raid.latitude, raid.longitude]}>
          <Popup>
            Gym: {raid.gymName} <br /> Raid Boss: {raid.bossName} <br /> Time Left: {raid.timeLeft}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Raids;
