import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
  } from "@/components/ui/tooltip";
  
  type Props = {
    data: { type: string; score: number }[];
  };
  
  export default function FactorBarChart({ data }: Props) {
    const total = data.reduce((sum, d) => sum + d.score, 0);
    const [internal, external] = data;
  
    return (
      <div className="w-full">
        <div className="flex justify-between mb-2 text-sm font-medium text-muted-foreground">
          <Tooltip>
            <TooltipTrigger asChild>
              <span>{internal.type} {internal.score}%</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>自分自身の特性や感情に由来するストレス</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>{external.type} {external.score}%</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>人間関係や環境など外部要因に由来するストレス</p>
            </TooltipContent>
          </Tooltip>
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
  