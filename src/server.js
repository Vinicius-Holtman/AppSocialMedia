const express = require('express');
const routes = require('./routes');
const connectionDb = require('./database/index')

const app = express();
app.use(express.json());

connectionDb.authenticate().then(() => console.log('db is ready'))

app.use(routes);

app.listen(3000, () => console.log('Server is running!'))