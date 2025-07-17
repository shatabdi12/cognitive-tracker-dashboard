import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';
export default function Patients() {
  const radarData = [
    { metric: 'Focus', A: 120 },
    { metric: 'Memory', A: 98 },
    { metric: 'Processing', A: 86 },
    { metric: 'Attention', A: 99 },
    { metric: 'Reaction', A: 85 },
  ];
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="User" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
