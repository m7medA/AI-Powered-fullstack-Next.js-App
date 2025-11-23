import { analyze } from '@/app/lib/ai';
import { getUserByClerkID } from '@/app/lib/auth';
import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

interface RouteParams {
  params: { id: string };
}

export const PATCH = async (req: Request, { params }: RouteParams) => {
  const { content } = await req.json();

  const { id } = await params;

  const user = await getUserByClerkID();

  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    data: {
      content,
    },
  });

  const analysis = await analyze(updatedEntry.content);

  const updated = await prisma.analysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    create: {
      userId: user.id,
      entryId: updatedEntry.id,
      ...analysis,
    },
    update: {
      ...analysis,
    },
  });

  revalidatePath(`/journal/${id}`);

  return NextResponse.json({ data: { ...updatedEntry, analysis: updated } });
};
