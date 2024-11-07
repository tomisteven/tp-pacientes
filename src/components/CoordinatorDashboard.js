// components/CoordinatorDashboard.js
import React, { useState, useEffect } from 'react';

function CoordinatorDashboard() {
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [pendingPatients, setPendingPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener los centros de la zona del coordinador
    const fetchCenters = async () => {
      try {
        // Simulación de llamada a API
        const centerData = [
          { id: 1, name: 'Centro de Salud 1' },
          { id: 2, name: 'Centro de Salud 2' },
          // Añadir más centros según los datos
        ];
        setCenters(centerData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los centros:", error);
      }
    };

    fetchCenters();
  }, []);

  const handleSelectCenter = (centerId) => {
    setSelectedCenter(centerId);
    // Simulación de llamada a API para obtener pacientes pendientes de ese centro
    const pending = [
      { id: 1, name: 'Juan Perez', email: 'juan@example.com' },
      { id: 2, name: 'Ana García', email: 'ana@example.com' },
      // Añadir más pacientes pendientes
    ];
    setPendingPatients(pending);
  };

  const handleSendReminder = () => {
    // Aquí se enviaría un recordatorio por correo electrónico a los pacientes que no completaron la encuesta
    alert('Recordatorio enviado a los pacientes pendientes.');
  };

  if (loading) return <p>Cargando centros...</p>;

  return (
    <div className="coordinator-panel">
    <h2>Panel de Coordinador</h2>

    <div>
      <h3>Seleccione un centro de salud</h3>
      <select onChange={(e) => handleSelectCenter(e.target.value)} value={selectedCenter || ''}>
        <option value="">--Seleccione un centro--</option>
        {centers.map((center) => (
          <option key={center.id} value={center.id}>
            {center.name}
          </option>
        ))}
      </select>
    </div>

    {selectedCenter && (
      <div>
        <h3>Pacientes pendientes de completar encuesta</h3>
        {pendingPatients.length > 0 ? (
          <ul className="patients-list">
            {pendingPatients.map((patient) => (
              <li key={patient.id}>
                {patient.name} - {patient.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay pacientes pendientes en este centro.</p>
        )}
        <button onClick={handleSendReminder}>Enviar Recordatorio</button>
      </div>
    )}
  </div>
  );
}

export default CoordinatorDashboard;
