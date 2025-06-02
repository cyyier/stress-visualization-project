import { TooltipText } from "@/components/TooltipText";
  
  type Props = {
    data: { type: string; score: number }[];
  };
  
  export default function DirectionChart({ data }: Props) {
    const total = data.reduce((sum, d) => sum + d.score, 0);
    const [inward, outward] = data;
  
    return (
      <div className="w-full">
        <div className="flex justify-between mb-2 text-sm font-medium text-muted-foreground">
          <TooltipText type="inward" label={`内向き傾向 ${inward.score}%`} />
          <TooltipText type="outward" label={`外向き傾向 ${outward.score}%`} />
        </div>
        <div className="relative w-full h-6 rounded-full overflow-hidden bg-gray-200">
          <div
            className="absolute left-0 top-0 h-full bg-primary"
            style={{ width: `${(inward.score / total) * 100}%` }}
          />
          <div
            className="absolute right-0 top-0 h-full bg-accent"
            style={{ width: `${(outward.score / total) * 100}%` }}
          />
        </div>
      </div>
    );
  }
  