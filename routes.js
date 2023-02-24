const express = require('express');
const expenseController = require('./controller');

const router = express.Router();
const apicache = require('apicache');
let cache = apicache.middleware;

// cache('2 minute'),

router
  .route('/')
  .get(expenseController.getExpenseData)
  .post(expenseController.postExpenseData);

router.route('/total').get(expenseController.getDividedExpense);

module.exports = router;
