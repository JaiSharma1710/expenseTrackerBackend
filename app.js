const express = require('express');
const expenseRouter = require('./routes');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/v1/expense', expenseRouter);

module.exports = app;
