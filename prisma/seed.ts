import { Prisma, PrismaClient } from '../generated/client/deno/edge.ts';
import { load } from 'https://deno.land/std@0.181.0/dotenv/mod.ts';

const envVars = await load();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const studioData: Prisma.StudioCreateInput[] = [
  {
    name: 'MAPPA',
  },
  {
    name: 'TOEI ANIMATION',
  },
  {
    name: 'STUDIO PIERROT',
  },
];

for (const u of studioData) {
  const studio = await prisma.studio.create({
    data: u,
  });
  console.log(`Created studio with id: ${studio.id}`);
}
console.log(`Seeding finished`);
await prisma.$disconnect();
