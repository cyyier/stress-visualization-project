import { mockAnalysisResult } from "./mock/analysisResult";

// import InternalTraitChart from "./components/InternalTraitChart";
import FactorBarChart from "./components/FactorBarChart";
// import SymptomTypeChart from "./components/SymptomTypeChart";
// import ExternalTraitChart from "./components/ExternalTraitChart";
// import DirectionChart from "./components/DirectionChart";

export default function ResultPage() {
  const {
    stressScore,
    internalTraitScores,
    externalTraitScores,
    factorScores,
    symptomTypeScores,
    directionScores,
  } = mockAnalysisResult;

  return (
    <div className="p-6 space-y-12 max-w-4xl mx-auto">
      {/* ストレススコア強調表示 */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-2">あなたのストレススコア</h2>
        <p className="text-4xl font-bold text-red-500">{stressScore.score}</p>
      </section>

      {/* 内在要因レーダーチャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">内的要因の分布</h3>
        {/* <InternalTraitChart data={internalTraitScores} /> */}
      </section>

      {/* 外在要因バーチャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">外的要因の分布</h3>
        {/* <ExternalTraitChart data={externalTraitScores} /> */}
      </section>

      {/* 内外比率チャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">内外要因の割合</h3>
        <FactorBarChart data={factorScores} />
      </section>

      {/* 症状タイプチャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">症状の種類別傾向</h3>
        {/* <SymptomTypeChart data={symptomTypeScores} /> */}
      </section>

      {/* 向きチャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">ストレスの向き</h3>
        {/* <DirectionChart data={directionScores} /> */}
      </section>
    </div>
  );
}

