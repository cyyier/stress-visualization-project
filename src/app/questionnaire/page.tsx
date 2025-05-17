'use client';

import questions from '@/data/questions.json';
import { useAnswerStore } from '@/store/useAnswerStore';
import { QuestionItem } from '@/components/QuestionItem';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function QuestionnairePage() {
  const { answers, setAnswer } = useAnswerStore();
  const router = useRouter();

  const handleSubmit = async () => {
    console.log('送信するデータ:', answers);
  
    const res = await fetch('/api/submitResult', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers),
    });
  
    if (!res.ok) throw new Error('送信失敗');
    const data = await res.json();
    console.log('サーバーからの返事:', data);

    router.push('/result');
  };

  useEffect(() => {
    localStorage.setItem('latestResult', JSON.stringify(answers));
  }, [answers]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">ストレス可視化プロジェクト</h1>
      {questions.map((q) => {
        const userAnswer = answers.find((a) => a.id === q.id);
        return (
          <QuestionItem
            key={q.id}
            question={q.question}
            selectedScore={userAnswer?.score}
            onSelect={(score) => setAnswer(q.id, score)}
          />
        );
      })}
      <Button
        variant={"success"}
        className="mt-6"
        onClick={handleSubmit}
      >
        回答を送信
      </Button>
      <div className="mt-10 mb-4 text-sm text-muted-foreground">
        【選択肢の説明】
        <ul className="list-disc pl-5">
            <li>1 = まったく当てはまらない</li>
            <li>2 = あまり当てはまらない</li>
            <li>3 = どちらとも言えない</li>
            <li>4 = やや当てはまる</li>
            <li>5 = 非常に当てはまる</li>
        </ul>
      </div>
    </main>
  );
}
