import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {
  // const [newTech, setNewTech] = useState('');
  const [techs, setTechs] = useState([]);

  function handleAddTech() {
    setTechs([...techs, 'Node.js']);
  }

  return (
    <div>
      <ul data-testid="tech-list">
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {/* <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      /> */}
      <button type="button" onClick={handleAddTech}>
        Adicionar
      </button>
    </div>
  );
}
