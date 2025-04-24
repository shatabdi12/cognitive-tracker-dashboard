import React from "react";

export default function Tests() {
  return (
  <>
    <div className="bg-white p-6 rounded-2xl shadow mb-8">
      <h2 className="text-2xl font-semibold mb-4">📅 Test History</h2>
      <ul className="divide-y divide-gray-200">
        <li className="py-2">Test 1 - 82</li>
        <li className="py-2">Test 2 - 90</li>
        <li className="py-2">Test 3 - 76</li>
      </ul>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6">➕ Add New Score</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Score
              </label>
              <input
                type="number"
                name="score"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
  </>
);
}
