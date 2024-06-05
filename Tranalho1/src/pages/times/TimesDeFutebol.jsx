import React, { useState } from 'react';

export const TimesDeFutebol = () => {
  const [times, setTimes] = useState(['Fluminense', 'Flamengo', 'Vasco', 'Botafogo']);
  const [novoTime, setNovoTime] = useState('');

  const adicionarTime = () => {
    if (novoTime) {
      setTimes([...times, novoTime]);
      setNovoTime('');
    }
  };

  return (
    <div>
      <h1>Lista de Times de Futebol</h1>
      <ul>
        {times.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={novoTime} 
        onChange={(e) => setNovoTime(e.target.value)} 
        placeholder="Digite o nome do novo time"
      />
      <button onClick={adicionarTime}>Adicionar Time</button>
    </div>
  );
};