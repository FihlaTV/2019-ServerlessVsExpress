const express = require('express');
const session = require('express-session');
const router = express.Router();
const app = express();
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const { SERVER_PORT } = require('./config/config') || process.env.server_port || 3000;

// Using middlewares
router.use(express.json());

// Routes will be like "/auth/login"
router.use('/auth', authRouter);

// Routes to get data
router.use('/user', userRouter);

app.use('/', router);

app.listen(SERVER_PORT, () => console.log(`Server listening on http://localhost:${SERVER_PORT}`));