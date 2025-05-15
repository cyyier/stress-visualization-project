import { create } from 'zustand';

// 回答データの型定義（idとscoreを持つオブジェクト）
type Answer = {
  id: string;
  score: number;
};

// ストア全体の型（answers配列とsetAnswer関数を持つ）
type State = {
  answers: Answer[];
  setAnswer: (id: string, score: number) => void;
};

// Zustandストアを作成
export const useAnswerStore = create<State>((set) => ({
  // 回答一覧（初期値は空配列）
  answers: [],

  // 回答をセットする関数
  setAnswer: (id, score) =>
    set((state) => {
      // すでにそのidの回答が存在するか確認
      const exists = state.answers.find((a) => a.id === id);

      if (exists) {
        // 存在する場合：scoreを更新し、それ以外はそのまま返す
        return {
          answers: state.answers.map((a) =>
            a.id === id ? { ...a, score } : a // idが一致ならscoreを更新、それ以外はそのまま
          ),
        };
      } else {
        // 存在しない場合：新しい回答を配列に追加する
        return { answers: [...state.answers, { id, score }] };
      }
    }),
}));
