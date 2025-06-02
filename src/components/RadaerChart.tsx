/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Radar,
  RadarChart as ReRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface RadarChartProps {
  data: { key: string; trait: string; score: number }[];
  tooltipLabels?: Record<string, string>;
}


export default function RadarChart({ data, tooltipLabels }: RadarChartProps) {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ReRadarChart data={data} outerRadius="80%">
          <PolarGrid stroke="#ccc" />
          <PolarAngleAxis dataKey="trait" fontSize={12} />
          <Tooltip
            formatter={(value: any, name: string, props: any) => {
              const label = props.payload.trait;
              const pro = tooltipLabels?.[label];
              return [ pro ? `${pro}` : "",`${value}%`];
            }}
          />
          <Radar
            name="Score"
            dataKey="score"
            stroke="#4f46e5"
            fill="#4f46e5"
            fillOpacity={0.6}
          />
        </ReRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
