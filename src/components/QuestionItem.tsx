import { Button } from '@/components/ui/button';

type Props = {
    question: string;
    selectedScore?: number;
    onSelect: (score: number) => void;
  };
  
  export const QuestionItem = ({ question, selectedScore, onSelect }: Props) => {
    const scale = [
      '1',
      '2',
      '3',
      '4',
      '5'
    ];
  
    return (
      <div className="mb-6 rounded-lg bg-background p-4">
        <p className="font-semibold text-base mb-4">{question}</p>
        <div className="flex justify-between gap-4">
          {scale.map((label, index) => (
            <Button
              key={index}
              variant={selectedScore === index + 1 ? 'default' : 'outline'}
              onClick={() => onSelect(index + 1)}
              className={`flex-1 h-10 p-0 text-base font-medium min-w-[30px] ${
                selectedScore === index + 1 ? 'ring-2 ring-primary' : ''
              }`}
            >
              {label}
            </Button>
          ))}
        </div>

          {/* スコアの意味ラベル */}
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>まったく当てはまらない</span>
          <span>非常に当てはまる</span>
        </div>
      </div>
    );
  };
  