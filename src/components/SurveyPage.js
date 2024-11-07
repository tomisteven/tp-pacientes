// components/SurveyPage.js
import React, { useState } from 'react';

function SurveyPage() {
  const [responses, setResponses] = useState(Array(10).fill(5)); // Array para respuestas de puntaje
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se enviarán las respuestas a la API
    alert('Encuesta completada. Gracias por su participación.');
  };

  return (
    <div className="survey-container">
    <h2>Encuesta de Evaluación</h2>
    <form onSubmit={handleSubmit}>
      {[...Array(10)].map((_, i) => (
        <div key={i}>
          <label>Pregunta {i + 1}</label>
          <input
            type="number"
            min="1"
            max="10"
            value={responses[i]}
            onChange={(e) => {
              const updatedResponses = [...responses];
              updatedResponses[i] = e.target.value;
              setResponses(updatedResponses);
            }}
            required
          />
        </div>
      ))}
      <label>Comentario:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">Enviar Encuesta</button>
    </form>
  </div>
  );
}

export default SurveyPage;
