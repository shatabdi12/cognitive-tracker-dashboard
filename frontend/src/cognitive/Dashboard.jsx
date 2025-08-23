import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const GET_SCORES = gql`
  query GetScores {
    scores {
      id
      score
      date
    }
  }
`;

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_SCORES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const scores = data.scores;
  const lineData = scores.map(score => ({
    date: score.date,
    score: score.score,
  }));

  const avgScore =
    scores.length > 0 ? scores.reduce((acc, s) => acc + s.score, 0) / scores.length : 0;
  const highestScore = scores.length > 0 ? Math.max(...scores.map(s => s.score)) : 0;
  const testsTaken = scores.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-600">📊 Avg Score</h2>
          <p className="text-4xl font-bold mt-2">
            {avgScore > 0 ? avgScore.toFixed(0) : <span className="text-gray-400">No Data</span>}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${avgScore}%` }}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-600">🏆 Highest Score</h2>
          <p className="text-4xl font-bold mt-2">{highestScore}</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${highestScore}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-600">📝 Tests Taken</h2>
          <p className="text-4xl font-bold mt-2">{testsTaken}</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div
              className="bg-purple-500 h-3 rounded-full"
              style={{ width: `${testsTaken}%` }}
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
    </>
  );
}
