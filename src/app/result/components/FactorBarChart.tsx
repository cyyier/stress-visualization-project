import { TooltipText } from "@/components/TooltipText";
  
  type Props = {
    data: { type: string; score: number }[];
  };
  
  export default function FactorBarChart({ data }: Props) {
    const total = data.reduce((sum, d) => sum + d.score, 0);
    const [internal, external] = data;
  
    return (
      <div className="w-full">
        <div className="flex justify-between mb-2 text-sm font-medium text-muted-foreground">
          <TooltipText type="internal" label={`内的要因 ${internal.score}%`} />
          <TooltipText type="external" label={`外的要因 ${external.score}%`} />
        </div>
        <div className="relative w-full h-6 rounded-full overflow-hidden bg-gray-200">
          <div
            className="absolute left-0 top-0 h-full bg-primary"
            style={{ width: `${(internal.score / total) * 100}%` }}
          />
          <div
            className="absolute right-0 top-0 h-full bg-accent"
            style={{ width: `${(external.score / total) * 100}%` }}
          />
        </div>
      </div>
    );
  }
  