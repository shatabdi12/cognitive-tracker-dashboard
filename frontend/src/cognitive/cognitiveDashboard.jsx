import { useState } from "react";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Tests from "./Tests";
import Patients from "./Patients";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function CognitiveDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
  <Router>
    <div className="flex">
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-2xl shadow">
    <ThemeToggle>
      <aside className="w-64 bg-gray-900 text-white p-6">
        <Nav />
      </aside>
      </ThemeToggle>
      </div>

      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <h1 className="flex text-4xl font-bold mb-8">
            🧠 Cognitive Tracker Dashboard
        </h1>
        <div className="mb-8 flex space-x-4 border-b pb-4">
          {["Overview", "History", "Insights"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 font-semibold rounded-lg ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "History" && (
          <div className="bg-white p-6 rounded-2xl shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">
            🔍 History...
          </h2>
          <p className="text-gray-600">
            This section will feature for reading patients history.
          </p>
          </div>
        )}

        {activeTab === "Insights" && (
          <div className="bg-white p-6 rounded-2xl shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              🔍 Insights Coming Soon...
            </h2>
            <p className="text-gray-600">
              This section will feature advanced analytics and patterns.
            </p>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </main>
    </div>
  </Router>
);
}
