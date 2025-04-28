export default function ExpenseList({ expenses, onEdit, onDelete }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg mt-8 md:mt-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">All Expenses</h2>
      <ul className="divide-y">
        {expenses.map((exp) => (
          <li key={exp._id} className="flex flex-col md:flex-row justify-between items-start md:items-center py-4">
            <div className="mb-2 md:mb-0">
              <p className="font-semibold text-lg">{exp.category} - ₹{exp.amount}</p>
              <p className="text-sm text-gray-500">{exp.description}</p>
              <p className="text-xs text-gray-400">{exp.email} | {new Date(exp.date).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-6 mt-2 md:mt-0">
              <button onClick={() => onEdit(exp)} className="text-blue-600 hover:underline">Edit</button>
              <button onClick={() => onDelete(exp._id)} className="text-red-500 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
