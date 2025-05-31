/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Answer, Question } from '@/types/index';

type TraitScores = Record<string, number>;

const resultsFilePath = path.resolve(process.cwd(), 'src/data/results.json');
const questionsFilePath = path.resolve(process.cwd(), 'src/data/questions.json');

function computeTraitScores(answers: Answer[], questions: Question[]) {
    const traitRawScores: TraitScores = {};
    const traitMaxScores: TraitScores = {};

    for (const answer of answers) {
        const q = questions.find((q) => q.id === answer.id);
        if (!q || !q.relatedTo) continue;

        for (const [trait, weight] of Object.entries(q.relatedTo)) {
            // 加权得分
            traitRawScores[trait] = (traitRawScores[trait] || 0) + weight * answer.score;
            // 最大可能得分（每题满分是 5）
            traitMaxScores[trait] = (traitMaxScores[trait] || 0) + weight * 5;
        }
    }


    // 正规化：按比例缩放到 0〜100
    const normalizedTraitScores: TraitScores = {};
    for (const trait in traitRawScores) {
        const raw = traitRawScores[trait];
        const max = traitMaxScores[trait] || 1; // 防爆除
        normalizedTraitScores[trait] = Math.round((raw / max) * 100);
    }

    return normalizedTraitScores;
}

export async function POST(req: Request) {
    try {
        const answers: Answer[] = await req.json();
        console.log('受信データ:', answers);

        // Load all questions
        const questionsRaw = await fs.readFile(questionsFilePath, 'utf-8');
        const questions: Question[] = JSON.parse(questionsRaw);

        // Compute score summary
        const traitScores = computeTraitScores(answers, questions);

        // Create result object
        const resultEntry = {
            id: `result_${Date.now()}`,
            timestamp: new Date().toISOString(),
            answers,
            traitScores
        };

        // Save to file
        let existing: any[] = [];
        try {
            const fileData = await fs.readFile(resultsFilePath, 'utf-8');
            existing = JSON.parse(fileData);
        } catch {
            console.log('ファイルがないので、新規作成します');
        }

        existing.push(resultEntry);
        await fs.writeFile(resultsFilePath, JSON.stringify(existing, null, 2));

        return NextResponse.json({ message: '保存成功', result: resultEntry });
    } catch (error) {
        console.error('APIエラー:', error);
        return NextResponse.json({ error: '内部エラー発生' }, { status: 500 });
    }
}
