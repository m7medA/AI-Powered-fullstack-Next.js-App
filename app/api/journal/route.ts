import { analyze } from '@/app/lib/ai';
import { getUserByClerkID } from '@/app/lib/auth';
import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const POST = async () => {
  const user = await getUserByClerkID();

  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'I am so Happy Today',
    },
  });

  const analysis = await analyze(entry.content);
  await prisma.analysis.create({
    data: {
      userId: user.id,
      entryId: entry.id,
      ...analysis,
    },
  });

  revalidatePath('/journal');

  return NextResponse.json({ data: entry });
};
