'use client'; // クライアントコンポーネントとして指定

// 質問データの読み込み
import questions from '@/data/questions.json';
import { useAnswerStore } from '@/store/useAnswerStore';
import { QuestionItem } from '@/components/QuestionItem';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

// 1ページに表示する質問数
const QUESTIONS_PER_PAGE = 4;

export default function QuestionnairePage() {
  const { answers, setAnswer } = useAnswerStore();
  const [ submitStatus, setSubmitStatus ] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [currentPage, setCurrentPage] = useState(0); // 現在のページ番号
  const router = useRouter();

  // 現在のページで表示する質問範囲の計算
  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const endIndex = startIndex + QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, endIndex);
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const progress = ((currentPage + 1) / totalPages) * 100;

  // 最初・最後のページ判定
  const isLastPage = endIndex >= questions.length;
  const isFirstPage = currentPage === 0;

  // 回答送信処理
  const handleSubmit = async () => {
    setSubmitStatus('loading');
    console.log('送信するデータ:', answers);
  
    const res = await fetch('/api/submitResult', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers),
    });
  
    if (!res.ok) {
        setSubmitStatus('error');
        return;
      }
      
    const data = await res.json();
    console.log('サーバーからの返事:', data);
    setSubmitStatus('success');
    router.push('/result'); // 結果ページへ遷移
  };

  // 回答をローカルストレージに保存（リロード時の復元用）
  useEffect(() => {
    localStorage.setItem('latestResult', JSON.stringify(answers));
  }, [answers]);

  // 現在のページの質問すべてに回答されているか確認
  const isCurrentPageComplete = currentQuestions.every(q =>
    answers.some(a => a.id === q.id)
  );

  return (
    <main className="p-6 flex justify-center">
    <div className="w-full max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">ストレス可視化プロジェクト</h1>
      <Progress value={progress} className="mb-6 h-2 bg-gray-200" />
      <p className="text-sm text-muted-foreground mb-4 text-right">
        {currentPage + 1} / {totalPages} ページ
      </p>

      {/* 各質問を表示 */}
      {currentQuestions.map((q, index) => {
        const globalIndex = currentPage * QUESTIONS_PER_PAGE + index; // 全体での番号
        const userAnswer = answers.find((a) => a.id === q.id);
        return (
          <QuestionItem
            key={q.id}
            question={`Q${globalIndex + 1}. ${q.question}`} // 番号付け
            selectedScore={userAnswer?.score}
            onSelect={(score) => setAnswer(q.id, score)}
          />
        );
      })}

      {/* ページネーション操作 */}
      <div className="flex gap-4 mt-6">
        <Button
          variant="outline"
          disabled={isFirstPage}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          前へ
        </Button>

        {/* 次へ or 回答を送信 */}
        {!isLastPage && (
          <Button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={!isCurrentPageComplete}
          >
            次へ
          </Button>
        )}

        {isLastPage && (
          <Button
            variant={"success"}
            onClick={handleSubmit}
            disabled={submitStatus === 'loading' || answers.length !== questions.length}
          >
            {submitStatus === 'loading' ? '送信中...' : '回答を送信'}
          </Button>
        )}
      </div>

      {/* 選択肢の説明 */}
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
    </div>
    </main>
  );
}
