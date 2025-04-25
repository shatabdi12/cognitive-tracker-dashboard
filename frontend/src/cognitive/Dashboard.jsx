import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const lineData = [
    { date: "Mon", score: 72 },
    { date: "Tue", score: 85 },
    { date: "Wed", score: 78 },
    { date: "Thu", score: 90 },
    { date: "Fri", score: 80 },
  ];

  return <>
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
                style={{ width: "75%" }}>
              </div>
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
  </>;
}
