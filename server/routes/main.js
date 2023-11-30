const app = require('express')();
const { LogRequest } = require('../middleware/HttpLogger');
const TestRoutes = require('./TestRoute');

app.use(LogRequest);

app.get('/', TestRoutes);

module.exports = app;
