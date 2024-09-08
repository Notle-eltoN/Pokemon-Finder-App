import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GPXParser } from 'gpxparser';  // You need to install a GPX parser library

function Routes() {
  const [gpxData, setGpxData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const parser = new GPXParser();
      parser.parse(reader.result);
      setGpxData(parser.tracks[0].points);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".gpx" onChange={handleFileUpload} />
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={gpxData.map(point => [point.lat, point.lon])} />
      </MapContainer>
    </div>
  );
}

export default Routes;
