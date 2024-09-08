import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

function Map() {
  const [pokemonSpawns, setPokemonSpawns] = useState([]);

  useEffect(() => {
    // Fetch Pokémon spawns from backend
    axios.get('/api/pokemon-spawns')
      .then(response => setPokemonSpawns(response.data))
      .catch(error => console.error("Error fetching Pokémon data", error));
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pokemonSpawns.map(pokemon => (
        <Marker key={pokemon.id} position={[pokemon.latitude, pokemon.longitude]}>
          <Popup>
            {pokemon.name} <br /> Rarity: {pokemon.rarity}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
