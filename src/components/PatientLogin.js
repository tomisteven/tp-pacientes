// components/PatientLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientLogin() {
  const [dni, setDni] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Datos ficticios de validación
  const validDni = '12345678'; // DNI de ejemplo
  const validClave = 'clave123'; // Clave de ejemplo

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación simple
    if (dni === validDni && clave === validClave) {
      setError('');
      navigate('/encuesta'); // Redirige a la página de encuesta
    } else {
      setError('DNI o clave incorrectos. Intente nuevamente.');
    }
  };

  return (
    <div className="patient-login">
      <h2>Ingreso Pacientes</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />

        <label htmlFor="clave">Clave:</label>
        <input
          type="password"
          id="clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />

        <button type="submit">Ingresar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si no es válido */}
    </div>
  );
}

export default PatientLogin;
