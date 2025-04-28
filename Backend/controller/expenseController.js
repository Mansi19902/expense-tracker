const Expense =  require("../models/Expense");

exports.addExpense = async (req, res) => {
    // Add expense 
    try {
        const { email, amount, category, description, date } = req.body;

        if(!email || !amount || !category || !date) {
            return res.status(400).json({ message: "All fields are required"});
        }
        const newExpense = await Expense.create({
            email,
            amount,
            category,
            description,
            // date: new Date(date),
        }); 
        res.status(200).json(newExpense);
    } catch (error) {
        res.status(500).json({ message: "Error adding expense", error });
    }
};

// get all expenses
exports.getExpense = async (req, res) => {
    try {
      const { email } = req.query;
      const query = email ? { email } : {};
      const expenses = await Expense.find(query);
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }; 

  // Update an existing expense
exports.updateExpense = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedExpense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
      res.status(200).json(updatedExpense);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Delete an expense
exports.deleteExpense = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedExpense = await Expense.findByIdAndDelete(id);
      if (!deletedExpense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
      res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
