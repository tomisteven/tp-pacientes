// components/ReportPage.js
import React, { useState, useEffect } from 'react';

function ReportPage() {
  const [zones, setZones] = useState([]);
  const [centers, setCenters] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [surveyResults, setSurveyResults] = useState([]);

  useEffect(() => {
    // Simulación de carga de zonas
    const fetchZones = async () => {
      const zoneData = [
        { id: 1, name: 'Zona Norte' },
        { id: 2, name: 'Zona Sur' },
        { id: 3, name: 'Zona Centro' },
        // Añadir más zonas si es necesario
      ];
      setZones(zoneData);
    };

    fetchZones();
  }, []);

  const handleSelectZone = (zoneId) => {
    setSelectedZone(zoneId);
    setSelectedCenter(null);
    // Simulación de carga de centros de la zona seleccionada
    const centerData = [
      { id: 1, name: 'Centro de Salud Norte 1', completed: 80 },
      { id: 2, name: 'Centro de Salud Norte 2', completed: 60 },
      // Añadir más centros según la zona
    ];
    setCenters(centerData);
  };

  const handleSelectCenter = (centerId) => {
    setSelectedCenter(centerId);
    // Simulación de resultados de encuestas para el centro seleccionado
    const surveyData = [
      { question: 'Organización', averageScore: 8.5 },
      { question: 'Tiempo de Atención', averageScore: 7.8 },
      // Más preguntas y resultados si es necesario
    ];
    setSurveyResults(surveyData);
  };

  return (
    <div className="survey-reports">
      <h2>Reportes de Encuestas</h2>

      <div>
        <h3>Seleccionar Zona</h3>
        <select onChange={(e) => handleSelectZone(e.target.value)} value={selectedZone || ''}>
          <option value="">--Seleccionar Zona--</option>
          {zones.map((zone) => (
            <option key={zone.id} value={zone.id}>{zone.name}</option>
          ))}
        </select>
      </div>

      {selectedZone && (
        <div>
          <h3>Centros de Salud en la Zona Seleccionada</h3>
          <ul>
            {centers.map((center) => (
              <li key={center.id}>
                <button onClick={() => handleSelectCenter(center.id)}>
                  {center.name} - {center.completed}% Completado
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedCenter && (
        <div>
          <h3>Resultados de Encuestas del Centro Seleccionado</h3>
          <ul>
            {surveyResults.map((result, index) => (
              <li key={index}>
                {result.question}: {result.averageScore} / 10
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ReportPage;
