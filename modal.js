const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A title is required'],
  },
  amount: {
    type: Number,
    required: [true, 'An amount is required'],
  },
  expenseType: {
    type: String,
    enum: ['Food', 'Shopping', 'Fun', 'Bill'],
    required: [true, 'An expense type is required'],
  },
  date: {
    type: Date,
    required: [true, 'A date is required'],
  },
});

const Expense = new mongoose.model('Expense', expenseSchema);

module.exports = Expense;
