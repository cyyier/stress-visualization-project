import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipTextProps {
  type: string;
  fallback?: string;
  label?: string;
}

const tooltipDictionary: Record<string, { label: string; description: string }> = {
  inward: {
    label: "内向き傾向",
    description: "自己否定や内向きの感情傾向",
  },
  outward: {
    label: "外向き傾向",
    description: "怒り・衝動性など外向きの反応傾向",
  },
  internal: {
    label: "内的要因",
    description: "気質や性格など個人内に起因する要因",
  },
  external: {
    label: "外的要因",
    description: "環境・人間関係・仕事など外的な要因",
  },
  emotional: {
    label: "感情面",
    description: "不安・抑うつ・情緒の揺れに関する症状",
  },
  cognitive: {
    label: "思考面",
    description: "集中力や記憶力など思考面の変化",
  },
  behavioral: {
    label: "行動面",
    description: "行動量や衝動性などの傾向",
  },
  interpersonal: {
    label: "対人面",
    description: "対人関係での衝突・孤立感など",
  },
  physical: {
    label: "身体面",
    description: "睡眠・食欲・疲労感など身体的変化",
  },
};

export function TooltipText({ type, fallback = "これは予備の説明です", label }: TooltipTextProps) {
  const dictEntry = tooltipDictionary[type];
  const displayLabel = label || dictEntry?.label || type;
  const description = dictEntry?.description || fallback;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="underline decoration-dotted cursor-help">{displayLabel}</span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}