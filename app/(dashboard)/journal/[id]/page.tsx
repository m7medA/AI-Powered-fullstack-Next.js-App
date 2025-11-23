import { getUserByClerkID } from '@/app/lib/auth';
import { prisma } from '@/app/lib/prisma';
import Editor from '@/components/Editor';

const getEntry = async (id: string) => {
  const user = await getUserByClerkID();

  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  });

  return entry;
};

export default async function EntryPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const entry = await getEntry(id);

  return (
    <div className="h-full w-full">
      <Editor entry={entry} />
    </div>
  );
}
