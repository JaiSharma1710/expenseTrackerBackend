const Expense = require('./modal');

exports.postExpenseData = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body);

    res.status(200).json({
      status: 'success',
      message: 'A new expense is successfully added in db',
      data: newExpense,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      error: err,
    });
  }
};

exports.getExpenseData = async (req, res) => {
  try {
    const allExpense = await Expense.find();

    res.status(200).json({
      status: 'success',
      data: allExpense,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      error: err,
    });
  }
};