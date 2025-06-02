import { mockAnalysisResult } from "./mock/analysisResult";

import StressFeedback from "./components/StressFeedback";
// import InternalTraitChart from "./components/InternalTraitChart";
import FactorBarChart from "./components/FactorBarChart";
// import SymptomTypeChart from "./components/SymptomTypeChart";
// import ExternalTraitChart from "./components/ExternalTraitChart";
import DirectionChart from "./components/DirectionChart";
import RadarChart from "@/components/RadaerChart";

export default function ResultPage() {
  const {
    stressScore,
    internalTraitScores,
    externalTraitScores,
    factorScores,
    symptomTypeScores,
    directionScores,
  } = mockAnalysisResult;
  console.log("内的要因", internalTraitScores)
  return (
    <div className="p-6 space-y-12 max-w-4xl mx-auto">
      {/* ストレススコア強調表示 */}
      <section className="text-center">
        <StressFeedback score={stressScore.score} />
      </section>

      {/* 内在要因レーダーチャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">内的要因の分布</h3>
        <RadarChart
          data={internalTraitScores}
          tooltipLabels={{
            "気分の落ち込みやすさ": "うつ傾向",
            "不安を感じやすさ": "不安傾向",
            "感受性の強さ": "HSP傾向",
            "気分の揺れやすさ": "BPD傾向",
            "集中のしにくさ": "ADHD傾向",
            "摂食に関する傾向": "摂食傾向"
          }}
        />
      </section>

      {/* 外在要因バーチャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">外的要因の分布</h3>
        <RadarChart data={externalTraitScores} />
      </section>

      {/* 内外比率チャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">内外要因の割合</h3>
        <FactorBarChart data={factorScores} />
      </section>

      {/* 症状タイプチャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">症状の種類別傾向</h3>

        <RadarChart data={symptomTypeScores} />
      </section>

      {/* 向きチャート */}
      <section>
        <h3 className="text-xl font-semibold mb-4">ストレスの向き</h3>
        <DirectionChart data={directionScores} />
      </section>
    </div>
  );
}

