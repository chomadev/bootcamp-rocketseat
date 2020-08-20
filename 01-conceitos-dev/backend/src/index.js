const express = require('express');
const bodyParser = require('body-parser')
const { uuid, isUuid } = require('uuidv4');

const app = express();
app.use(bodyParser.json());

const projects = [];

function logRequest(request, response, next) {
  const { method, url } = request;
  const output = `[${method.toUpperCase()} - ${url}]`;
  console.time(output);
  next();
  console.timeEnd(output);
}
app.use(logRequest);

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id))
    return response.status(400).json({ error: 'Invalid project ID. ' });

  next();
}
app.use('/projects/:id', validateProjectId);

//curl -X GET http://localhost:3333/projects
app.get('/projects', (request, response) => {
  const { name } = request.query;

  const results = name
    ? projects.filter(project => project.name.includes(name))
    : projects;

  return response.status(200).json(results);
});

//curl -X POST http://localhost:3333/projects -d '{ "name": "Project created", "owner": "Nobody" }' -H "Content-Type: application/json;charset=utf-8"
app.post('/projects', (request, response) => {
  const { name, owner } = request.body;
  const project = { id: uuid(), name, owner };
  projects.push(project);
  return response.status(201).json(project);
});

//curl -X PUT http://localhost:3333/projects/{id} -d '{ "name": "Project updated", "owner": "Somebody" }' -H "Content-Type: application/json;charset=utf-8"
app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { name, owner } = request.body;
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(404).json({ error: "project not found " });
  }

  const project = { id, name, owner };
  projects[projectIndex] = project;
  return response.status(200).json(project);
})

//curl -X DELETE http://localhost:3333/projects/{id}
app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(404).json({ error: "project not found " });
  }
  projects.splice(projectIndex, 1);

  return response.sendStatus(204);
})

app.listen(3333, () => {
  console.log("🚀Back-end started!");
});
