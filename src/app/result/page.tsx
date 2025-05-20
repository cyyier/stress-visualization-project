'use client';

import { useEffect, useState } from 'react';
import ResultChart from '@/components/resultChart';

export default function ResultPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('latestResult');
    if (stored) {
      const parsed = JSON.parse(stored);
      setResults(parsed);
    }
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">あなたのストレス</h1>
      <ResultChart />
      {/* <ul className="space-y-2">
      {results.map((item) => (
        <li key={item.id} className="bg-white p-3 rounded shadow">
          <p className="font-medium">{item.id}</p>
          <p>スコア: {item.score}</p>
        </li>
      ))}
    </ul> */}
    </main>
  );
}
