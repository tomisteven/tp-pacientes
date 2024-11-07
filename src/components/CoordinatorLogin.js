// components/CoordinatorLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CoordinatorLogin() {
  const [legajo, setLegajo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de autenticación
    if (legajo === "12345" && password === "cordinador123") {
      // Redirigir al dashboard si la autenticación es exitosa
      navigate("/cordinador-dashboard");
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      setError("Número de legajo o clave incorrecta");
    }
  };

  return (
    <div className="coordinator-login">
      <h2>Login de Coordinador</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="legajo">Número de Legajo:</label>
          <input
            type="text"
            id="legajo"
            value={legajo}
            onChange={(e) => setLegajo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Clave:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Ingresar</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default CoordinatorLogin;
