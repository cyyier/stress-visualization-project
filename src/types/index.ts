// ─────────────────────────────────────────────
// ユーザーの回答データ構造
// ─────────────────────────────────────────────

export type Answer = {
    id: string;         // 対応する質問のID
    score: number;      // ユーザーが選択したスコア（1〜5）
  };
  
  // ─────────────────────────────────────────────
  // 質問データ構造
  // ─────────────────────────────────────────────
  
  export type Question = {
    id: string;
    question: string;
    symptomType: 'emotional' | 'cognitive' | 'physical' | 'behavioral' | 'interpersonal';
    factor: 'internal' | 'external';
    externalType: string | null;
    relatedTo: Record<string, number>; // 各トレイトへの重みづけ（0.0〜1.0）
    usage: string[];
    timespan: 'recent' | 'trait' | 'both';
    sensitivity: 'low' | 'medium' | 'high';
    polarity: 'negative' | 'positive' | 'neutral';
    direction: 'inward' | 'outward' | 'ambiguous';
    avoidIfSensitive: boolean;
    note?: string;
  };
  
  // ─────────────────────────────────────────────
  // 各トレイト（特性）に対するスコア（正規化済み）
  // ─────────────────────────────────────────────
  
  export type TraitScores = Record<string, number>; // e.g. { stress: 84, depression: 67 }
  
  // ─────────────────────────────────────────────
  // フィードバック表示用の構造（レベル＋文言）
  // ─────────────────────────────────────────────
  
  export type FeedbackMessage = {
    level: string;    // 表示するレベル（低い、高いなど）
    message: string;  // レベルに応じたフィードバック文
  };
  
  // ─────────────────────────────────────────────
  // ローカルストレージやAPI保存時に使う構造
  // ─────────────────────────────────────────────
  
  export type StoredResult = {
    answers: Answer[];
    scores: TraitScores;
    submittedAt: string; // ISO文字列の日付
  };
  