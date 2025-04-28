import { useState, useEffect } from 'react'; 
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';
import axios from 'axios';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/expense/get`);
    setExpenses(res.data);
  };

  const handleSave = async (expense) => {
    if (editingExpense) {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/expense/${editingExpense._id}`, expense);
    } else {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/expense/add`, expense);
    }
    fetchExpenses();
    setEditingExpense(null);
    setShowForm(false);
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setShowForm(true); 
  };

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/expense/delete/${id}`);
    fetchExpenses();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">Expense Tracker</h1>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {showForm ? 'Close Form' : 'Add New Expense'}
          </button>
        </div>

        {showForm && <ExpenseForm onSave={handleSave} editingExpense={editingExpense} />}

        <Dashboard expenses={expenses} />
        <ExpenseList expenses={expenses} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
