import { getUserByClerkID } from '@/app/lib/auth';
import { prisma } from '@/app/lib/prisma';
import HistoryChart from '@/components/HistoryChart';

const getData = async () => {
  const user = await getUserByClerkID();
  const analysis = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    select: {
      updatedAt: true,
      sentimentScore: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  const sum = analysis.reduce(
    (all, current) => all + current.sentimentScore,
    0
  );

  const avg = Math.round(sum / analysis.length);

  return { analysis, avg };
};

export default async function History() {
  const { avg, analysis } = await getData();

  return (
    <div className="w-full h-full">
      <div>{`Avg. Sentiment ${avg}`}</div>

      <div className="w-full h-full">
        <HistoryChart data={analysis} />
      </div>
    </div>
  );
}
