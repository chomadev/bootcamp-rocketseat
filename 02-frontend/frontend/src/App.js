import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';
import './global.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => { setProjects(response.data) })
  }, []);

  const handleAddProject = async (e) => {
    const response = await api.post('/projects', {
      name: 'new project',
      owner: 'choma.dev'
    });
    setProjects([...projects, response.data]);
  }
  return (
    <>
      <Header title="HomePage">
      </Header>
      <ul>
        {projects.map((project) => <li key={project.id}>{project.name}</li>)}
      </ul>
      <button onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;