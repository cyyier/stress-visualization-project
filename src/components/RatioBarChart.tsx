import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface BarData {
  label: string;
  score: number;
  type: string;
  tooltip?: string;
}

interface Props {
  title: string;
  data: BarData[];
}

export default function RatioBarChart({ title, data }: Props) {
  const total = data.reduce((sum, item) => sum + item.score, 0);

  return (
    <div className="w-full">
      <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
        {title}
      </h3>
      <div className="flex justify-between mb-2 text-sm font-medium text-muted-foreground">
        {data.map((item) => (
          <Tooltip key={item.type}>
            <TooltipTrigger asChild>
              <span>{item.label} {item.score}%</span>
            </TooltipTrigger>
            {item.tooltip && (
              <TooltipContent>
                <p>{item.tooltip}</p>
              </TooltipContent>
            )}
          </Tooltip>
        ))}
      </div>
      <div className="relative w-full h-6 rounded-full overflow-hidden bg-gray-200">
        {data.map((item, index) => {
          const width = `${(item.score / total) * 100}%`;
          const position = index === 0 ? "left-0" : "right-0";
          const color = index === 0 ? "bg-primary" : "bg-accent";
          return (
            <div
              key={item.type}
              className={cn("absolute top-0 h-full", position, color, "transition-all")}
              style={{ width }}
            />
          );
        })}
      </div>
    </div>
  );
}
