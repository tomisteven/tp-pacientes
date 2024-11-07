// components/SecretaryDashboard.js
import React, { useState } from 'react';

function SecretaryDashboard() {
  const [importStatus, setImportStatus] = useState('');
  const [surveyStatus, setSurveyStatus] = useState('');

  const handleImportData = () => {
    // Simulación de la importación de datos
    try {
      setImportStatus('Importando datos...');
      setTimeout(() => {
        setImportStatus('Datos importados exitosamente del Sistema General de Salud.');
      }, 1500);
    } catch (error) {
      setImportStatus('Error al importar los datos.');
    }
  };

  const handleGenerateSurveys = () => {
    // Simulación de la generación de encuestas
    try {
      setSurveyStatus('Generando encuestas...');
      setTimeout(() => {
        setSurveyStatus('Encuestas generadas y claves asignadas a los pacientes.');
      }, 1500);
    } catch (error) {
      setSurveyStatus('Error al generar las encuestas.');
    }
  };

  return (
    <div className="secretary-panel">
      <h2>Panel de Secretaría</h2>

      <div>
        <h3>Importar datos de pacientes</h3>
        <button onClick={handleImportData}>Importar Datos</button>
        <p className="status-message">{importStatus}</p>
      </div>

      <div>
        <h3>Generar Encuestas</h3>
        <button onClick={handleGenerateSurveys}>Generar Encuestas</button>
        <p className="status-message">{surveyStatus}</p>
      </div>

      <div>
        <h3>Reportes</h3>
        <p>Accede a los reportes para revisar las encuestas y el estado del padrón actualizado.</p>
        <button onClick={() => (window.location.href = '/reportes')}>Ir a Reportes</button>
      </div>
    </div>
  );
}

export default SecretaryDashboard;
