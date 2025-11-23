import { qa } from '@/app/lib/ai';
import { getUserByClerkID } from '@/app/lib/auth';
import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const { question } = await request.json();
  const user = await getUserByClerkID();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      content: true,
      createdAt: true,
    },
  });

  const answer = await qa(question, entries);

  return NextResponse.json({ data: answer });
};
