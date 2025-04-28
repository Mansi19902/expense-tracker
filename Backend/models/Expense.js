const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
  {
    email: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
        type: String,
        required: true,
        default: "Uncategorized",
    },
    description: {
        type: String,
        required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expenses", expenseSchema);