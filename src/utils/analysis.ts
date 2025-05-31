export type Answer = {
    id: string;
    score: number;
  };
  
  export type Question = {
    id: string;
    question: string;
    categories: string[];
  };
  
  export type CategoryScore = {
    category: string;
    score: number;
  };
  
  // 将分类归属独立为映射对象，方便未来调整（机器学习阶段也可替换为动态映射）
  export const factorMap: Record<string, 'internal' | 'external'> = {
    HSP: 'internal',
    ADHD: 'internal',
    自尊心: 'internal',
    Work: 'external',
    Home: 'external',
    School:  'external',
  };
  
  /**
   * 计算每个分类的平均得分，并转换为百分制（0-100）
   * 当前版本假设所有题目正向计分，未来支持反向题后可加入权重与方向因子
   */
  export function calculateCategoryAverages(
    answers: Answer[],
    questions: Question[]
  ): CategoryScore[] {　　　　　
    const result: Record<string, number[]> = {};
  
    for (const answer of answers) {
      const question = questions.find((q) => q.id === answer.id);
      if (!question) continue;
  
      for (const category of question.categories) {
        if (!result[category]) result[category] = [];
        result[category].push(answer.score);
      }
    }
  
    return Object.entries(result).map(([category, scores]) => ({
      category,
      score: Math.round((scores.reduce((a, b) => a + b, 0) / scores.length / 5) * 100),
    }));
  }
  
  /**
   * 计算某一类因子的总体平均得分（如：internal 或 external）
   */
  export function calculateFactorAverage(
    categoryScores: CategoryScore[],
    factor: 'internal' | 'external'
  ): number {
    const filtered = categoryScores.filter(
      (cs) => factorMap[cs.category] === factor
    );
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, cs) => sum + cs.score, 0);
    return Math.round(total / filtered.length);
  }
  