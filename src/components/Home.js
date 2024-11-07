// components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import MapView from "./MapView";

function Home() {
  const centersData = [
    {
      id: 1,
      name: "Centro de Salud Norte 1",
      address: "Av. Libertador 1234",
      latitude: -34.603722,
      longitude: -58.381592,
    },
    {
      id: 2,
      name: "Centro de Salud Norte 2",
      address: "Calle Falsa 456",
      latitude: -34.608722,
      longitude: -58.382592,
    },
    {
      id: 3,
      name: "Centro de Salud Sur 1",
      address: "Av. Rivadavia 789",
      latitude: -34.613722,
      longitude: -58.383592,
    },
    {
      id: 4,
      name: "Centro de Salud Sur 2",
      address: "Calle del Sol 321",
      latitude: -34.616722,
      longitude: -58.384592,
    },
    {
      id: 5,
      name: "Centro de Salud Este 1",
      address: "Avenida Juan B. Justo 1010",
      latitude: -34.621722,
      longitude: -58.385592,
    },
    {
      id: 6,
      name: "Centro de Salud Este 2",
      address: "Calle Moreno 2020",
      latitude: -34.627722,
      longitude: -58.386592,
    },
    {
      id: 7,
      name: "Centro de Salud Oeste 1",
      address: "Avenida 9 de Julio 1111",
      latitude: -34.630722,
      longitude: -58.387592,
    },
    {
      id: 8,
      name: "Centro de Salud Oeste 2",
      address: "Calle San Martín 909",
      latitude: -34.633722,
      longitude: -58.388592,
    },
    {
      id: 9,
      name: "Centro de Salud Centro 1",
      address: "Avenida Córdoba 567",
      latitude: -34.636722,
      longitude: -58.389592,
    },
    {
      id: 10,
      name: "Centro de Salud Centro 2",
      address: "Avenida de Mayo 123",
      latitude: -34.639722,
      longitude: -58.390592,
    },
    {
      id: 11,
      name: "Centro de Salud Norte 3",
      address: "Avenida Sarmiento 2100",
      latitude: -34.642722,
      longitude: -58.391592,
    },
    {
      id: 12,
      name: "Centro de Salud Sur 3",
      address: "Calle Pueyrredón 400",
      latitude: -34.645722,
      longitude: -58.392592,
    },
    {
      id: 13,
      name: "Centro de Salud Este 3",
      address: "Calle de la Paz 100",
      latitude: -34.648722,
      longitude: -58.393592,
    },
    {
      id: 14,
      name: "Centro de Salud Oeste 3",
      address: "Calle Alem 501",
      latitude: -34.651722,
      longitude: -58.394592,
    },
    {
      id: 15,
      name: "Centro de Salud Norte 4",
      address: "Calle Tucumán 678",
      latitude: -34.654722,
      longitude: -58.395592,
    },
    {
      id: 16,
      name: "Centro de Salud Sur 4",
      address: "Av. Santa Fe 810",
      latitude: -34.657722,
      longitude: -58.396592,
    },
    {
      id: 17,
      name: "Centro de Salud Este 4",
      address: "Calle Florida 550",
      latitude: -34.660722,
      longitude: -58.397592,
    },
    {
      id: 18,
      name: "Centro de Salud Oeste 4",
      address: "Calle Las Heras 300",
      latitude: -34.663722,
      longitude: -58.398592,
    },
    {
      id: 19,
      name: "Centro de Salud Centro 3",
      address: "Av. Belgrano 700",
      latitude: -34.666722,
      longitude: -58.399592,
    },
    {
      id: 20,
      name: "Centro de Salud Norte 5",
      address: "Av. Callao 900",
      latitude: -34.669722,
      longitude: -58.400592,
    },
  ];



  const getRandomImage = () => "https://via.placeholder.com/300";
  return (
    <div className="home">
      <h1>Bienvenido al Sistema de Encuestas de Salud</h1>

      <div className="navigation-links">
        <Link to="/login/paciente">Acceso Pacientes</Link>
        <Link to="/login/cordinador">Acceso Coordinadores</Link>
        <Link to="/panel/secretaria">Acceso Secretaría</Link>
      </div>

      <h2>Centros de Atención</h2>
      <div className="map-container">
        <MapView centers={centersData} />
      </div>

      <h1>Bienvenido al Sistema de Encuestas de Salud</h1>

      <h2>Centros de Atención</h2>
      <div className="centers-list">
        {centersData.map((center) => (
          <div key={center.id} className="center-card">
            <img src={getRandomImage()} alt="Centro de Salud" />
            <h3>{center.name}</h3>
            <p>{center.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
