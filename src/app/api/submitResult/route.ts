import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

type Result = {
    id: string;
    score: number;
  };

const filePath = path.resolve(process.cwd(), 'data/results.json');

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      console.log('受信データ:', body);
  
      let results: Result[] = [];
      try {        
        const fileData = await fs.readFile(filePath, 'utf-8');
        results = JSON.parse(fileData);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.log('ファイルがないので、新規作成します');
      }
  
      if (Array.isArray(body)) {
        results.push(...body);
      } else {
        results.push(body);
      }
  
      await fs.writeFile(filePath, JSON.stringify(results, null, 2));
  
      return NextResponse.json({ message: 'ファイル保存完了', currentResults: results });
    } catch (error) {
      console.error('APIエラー:', error);
      return NextResponse.json({ error: '内部エラー発生' }, { status: 500 });
    }
  }