import React, { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Richard Parker",
    email: "Rich.parker@example.com",
    phone: "+1 234 567 8901",
    address: "123 Main St, Cityville",
  });

  const [account, setAccount] = useState({
    number: "•••• 3421",
    type: "Savings",
    status: "Active",
    balance: 12450.9,
  });

  const [transactions, setTransactions] = useState([
    { name: "Online Transfer", amount: -150.0 },
    { name: "Salary Credit", amount: 2300.0 },
    { name: "ATM Withdrawal", amount: -200.0 },
  ]);

  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleEdit = () => setShowEdit(true);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    setUser(formData);
    setShowEdit(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Account Profile</h1>

        {!showEdit ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-3">Personal Information</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Address:</strong> {user.address}</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-3">Account Overview</h2>
                <p><strong>Account Number:</strong> {account.number}</p>
                <p><strong>Account Type:</strong> {account.type}</p>
                <p><strong>Status:</strong> {account.status}</p>
                <p><strong>Balance:</strong> ${account.balance.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-5 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Recent Transactions</h2>
              <ul className="space-y-3">
                {transactions.map((t, i) => (
                  <li key={i} className="flex justify-between border-b pb-2">
                    <span>{t.name}</span>
                    <span>
                      {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center mt-10">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
                onClick={handleEdit}
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Edit Information</h2>

            <div className="grid grid-cols-1 gap-4">
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label className="block font-semibold mb-1 capitalize">{key}</label>
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700 transition"
                onClick={handleSave}
              >
                Save
              </button>

              <button
                className="px-6 py-3 bg-gray-400 text-white rounded-2xl shadow hover:bg-gray-500 transition"
                onClick={() => setShowEdit(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}