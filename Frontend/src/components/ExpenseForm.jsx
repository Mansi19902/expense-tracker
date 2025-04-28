import { useState, useEffect } from 'react';

export default function ExpenseForm({ onSave, editingExpense }) {
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    category: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    if (editingExpense) {
      setFormData(editingExpense);
    } else {
      setFormData({ email: '', amount: '', category: '', description: '', date: '' });
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg mb-6 md:mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">{editingExpense ? "Edit Expense" : "Add New Expense"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {editingExpense ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
}
