export default function StressFeedback({ score }: { score: number }) {
    let level = '';
    let message = '';
  
    if (score < 25) {
        level = '低い';
        message = 'ストレス反応は少なく、比較的落ち着いた状態です。今の感覚を大切にしながら過ごしてみてください。';
      } else if (score < 50) {
        level = '小さなゆらぎ';
        message = '日常の中で、少しストレスに反応しやすい場面があったかもしれません。自分のペースを意識してみるのも良いかもしれません。';
      } else if (score < 75) {
        level = 'やや高い';
        message = '気分や体調に変化が出ている可能性があります。無理せず、休めるときにしっかり休むよう意識してみましょう。';
      } else if (score < 90) {
        level = '高い';
        message = 'ストレスの影響が少し強く出てきているかもしれません。日々の負担を見直す時間をつくってみてください。';
      } else {
        level = '非常に高い';
        message = 'ストレスがかなり強く現れているようです。必要に応じて、信頼できる人や専門家に相談してみることも選択肢のひとつです。';
      }      
  
    return (
      <div className="border rounded-lg p-4 bg-background shadow-sm">
        <p className="text-lg font-semibold mb-2">ストレスレベル：{score} / 100（{level}）</p>
        <p className="text-muted-foreground text-sm">{message}</p>
      </div>
    );
  }
  