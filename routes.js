const express = require('express');
const expenseController = require('./controller');

const router = express.Router();

router
  .route('/')
  .get(expenseController.getExpenseData)
  .post(expenseController.postExpenseData);

module.exports = router;
