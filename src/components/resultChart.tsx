'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const sampleData = [
  { category: 'HSP', score: 60 },
  { category: '仕事', score: 40 },
  { category: '家庭', score: 30 },
  { category: '内的要因', score: 70 },
  { category: '外的要因', score: 30 },
];

export default function ResultChart() {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <RadarChart data={sampleData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <Radar dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
