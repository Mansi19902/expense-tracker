const express = require('express');
const {
    addExpense,
    getExpense,
    updateExpense,
    deleteExpense,
} = require('../controller/expenseController');

const router = express.Router();

router.post('/add', addExpense);
router.get('/get', getExpense);
router.put('/:id', updateExpense);
router.delete('/delete/:id', deleteExpense);

module.exports = router;