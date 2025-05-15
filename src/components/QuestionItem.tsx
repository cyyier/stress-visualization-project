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
      <div className="mb-6">
        <p className="font-medium mb-2">{question}</p>
        <div className="flex gap-3">
          {scale.map((label, index) => (
            <Button
              key={index}
              variant={selectedScore === index + 1 ? 'default' : 'outline'}
              onClick={() => onSelect(index + 1)}
              className="px-3 py-1 w-10 h-10 p-0"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    );
  };
  