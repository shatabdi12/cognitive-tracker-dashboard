import { useState } from "react";
import {
  LineChart,
  Line,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Tests from "./Tests";
import Patients from "./Patients";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function CognitiveDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const lineData = [
    { date: "Mon", score: 72 },
    { date: "Tue", score: 85 },
    { date: "Wed", score: 78 },
    { date: "Thu", score: 90 },
    { date: "Fri", score: 80 },
  ];

  const radarData = [
    { metric: "Focus", A: 120 },
    { metric: "Memory", A: 98 },
    { metric: "Processing", A: 86 },
    { metric: "Attention", A: 99 },
    { metric: "Reaction", A: 85 },
  ];

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <Router>
            <Nav className="flex flex-col space-y-2 p-4 w-48 bg-gray-100 h-screen"/>
            <div className="flex-1 p-4 hidden">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/patients" element={<Patients />} />
            </Routes>
          </div>
        </Router>
      </aside>

      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">
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

        {activeTab === "Overview" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold text-gray-600">
                  📊 Avg Score
                </h3>
                <p className="text-4xl font-bold mt-2">82</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold text-gray-600">
                  🏆 Highest Score
                </h3>
                <p className="text-4xl font-bold mt-2">94</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold text-gray-600">
                  📝 Tests Taken
                </h3>
                <p className="text-4xl font-bold mt-2">15</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                  <div
                    className="bg-purple-500 h-3 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow mb-8">
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  <Radar
                    name="User"
                    dataKey="A"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {activeTab === "History" && (
          <div className="bg-white p-6 rounded-2xl shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">📅 Test History</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2">Test 1 - 82</li>
              <li className="py-2">Test 2 - 90</li>
              <li className="py-2">Test 3 - 76</li>
            </ul>
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
      </main>
    </div>
  );
}
