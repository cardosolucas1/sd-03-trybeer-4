const express = require('express');
const bodyParser = require('body-parser');

const { registerController } = require('./controllers/userController');
const { loginController } = require('./controllers/userController');
const authMiddleware = require('./middlewares/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send();
});

// Rota Get Testando Middleware de Validação do Token JWT
app.get('/auth', authMiddleware);

app.post('/login', (req, res) => loginController(req, res));

app.post('/register', (req, res) => registerController(req, res));

app.listen(3001, () => console.log('Listening on port 3001!'));
