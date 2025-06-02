export const mockAnalysisResult = {
    // 特殊高亮展示
    stressScore: { trait: "ストレス", key: "stress", score: 80 },
  
    //  内在要因
    internalTraitScores: [
      { trait: "気分の落ち込みやすさ", key: "depression", score: 65 },
      { trait: "不安を感じやすさ", key: "anxiety", score: 45 },
      { trait: "感受性の強さ", key: "hsp", score: 70 },
      { trait: "気分の揺れやすさ", key: "bpd", score: 50 },
      { trait: "集中のしにくさ", key: "adhd", score: 35 },
      { trait: "摂食に関する傾向", key: "eating_disorder", score: 20 },
    ],
  
    //  外的要因
    externalTraitScores: [
      { trait: "仕事ストレス", key: "work_pressure", score: 58 },
      { trait: "人間関係の不安", key: "interpersonal_conflict", score: 42 },
      { trait: "家庭環境の負担", key: "family_issues", score: 30 },
      { trait: "経済的不安", key: "financial_stress", score: 20 },
    ],
  
    // 内外要因
    factorScores: [
      { type: "内的要因", score: 72 },
      { type: "外的要因", score: 28 },
    ],
  
    //  symptomType 
    symptomTypeScores: [
      { key: "emotional", trait: "感情面", score: 65 },
      { key: "cognitive", trait: "思考面", score: 42 },
      { key: "behavioral", trait: "行動面", score: 38 },
      { key: "interpersonal", trait: "対人面", score: 28 },
      { key: "physical", trait: "身体面", score: 49 },
    ],
  
    //  情绪方向性
    directionScores: [
      { type: "inward", label: "自己に向かう", score: 72 },
      { type: "outward", label: "外に向かう", score: 38 },
    ]
};