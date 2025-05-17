'use client';

import { useEffect, useState } from 'react';

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
      <h1 className="text-2xl font-bold mb-4">あなたの回答結果</h1>
      <pre className="bg-white p-4 rounded shadow text-sm">{JSON.stringify(results, null, 2)}</pre>
    </main>
  );
}
