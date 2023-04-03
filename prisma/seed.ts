// import { PrismaClient, Prisma } from '../generated/client/deno/edge.ts';
import { PrismaClient, Prisma } from '../generated/client/deno/edge.ts'
import { load } from 'https://deno.land/std@0.181.0/dotenv/mod.ts';

const envVars = await load();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

// const studioData: Prisma.StudioCreateInput[] = [
//   {
//     name: 'Mappa',
//   },
//   {
//     name: 'Toei Animation',
//   },
//   {
//     name: 'Studio Pierrot',
//   }
// ]

const genreData: Prisma.GenreCreateInput[] = [
  {
    name: 'Romance'
  },
  {
    name: 'Action'
  },
  {
    name: 'Comedy'
  },
  {
    name: 'Slince Of Life'
  },
  {
    name: 'Drama'
  },
  {
    name: 'Slince of Life'
  },
  {
    name: 'Trhiller'
  },
]

for (const u of genreData) {
  const genre = await prisma.genre.create({
    data: u,
  });
  console.log(`Created genre with id: ${genre.id}`);
}
console.log(`Seeding finished`);
await prisma.$disconnect();
