export const mockAnalysisResult = {
    // 特殊高亮展示
    stressScore: { trait: "ストレス", key: "stress", score: 80 },
  
    //  内在要因雷达图
    internalTraitScores: [
      { trait: "うつ", key: "depression", score: 65 },
      { trait: "不安", key: "anxiety", score: 45 },
      { trait: "HSP", key: "hsp", score: 70 },
      { trait: "BPD傾向", key: "bpd", score: 50 },
      { trait: "ADHD傾向", key: "adhd", score: 35 },
      { trait: "摂食傾向", key: "eating_disorder", score: 20 },
    ],
  
    //  外的要因柱状图
    externalTraitScores: [
      { trait: "仕事ストレス", key: "work_pressure", score: 58 },
      { trait: "人間関係の不安", key: "interpersonal_conflict", score: 42 },
      { trait: "家庭環境の負担", key: "family_issues", score: 30 },
      { trait: "経済的不安", key: "financial_stress", score: 20 },
    ],
  
    // 内外要因比例
    factorScores: [
      { type: "内的要因", score: 72 },
      { type: "外的要因", score: 28 },
    ],
  
    //  symptomType 分类
    symptomTypeScores: [
      { type: "emotional", label: "感情面", score: 65 },
      { type: "cognitive", label: "思考面", score: 42 },
      { type: "behavioral", label: "行動面", score: 38 },
      { type: "interpersonal", label: "対人面", score: 28 },
      { type: "physical", label: "身体面", score: 49 },
    ],
  
    //  情绪方向性
    directionScores: [
      { type: "inward", label: "自己に向かう", score: 72 },
      { type: "outward", label: "外に向かう", score: 38 },
    ]
};