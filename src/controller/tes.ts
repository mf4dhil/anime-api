import { Router, Context } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Film {
  id: number;
  title: string;
  synopsis: string;
  duration: number;
  release: Date;
  studioId: number;
  genres?: {
    connect: {
      id: number;
    }[];
  };
}

const filmController = {
  async index(ctx: Context) {
    const films = await prisma.film.findMany({
      include: {
        genres: true,
        studio: true,
      },
    });
    ctx.response.body = films;
  },

  async show(ctx: Context) {
    const film = await prisma.film.findUnique({
      where: {
        id: Number(ctx.params.id),
      },
      include: {
        genres: true,
        studio: true,
      },
    });
    if (film) {
      ctx.response.body = film;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { message: 'Film not found' };
    }
  },

  async create(ctx: Context) {
    const body = await ctx.request.body();
    const film: Film = body.value;
    const createdFilm = await prisma.film.create({
      data: {
        title: film.title,
        synopsis: film.synopsis,
        duration: film.duration,
        release: film.release,
        studio: { connect: { id: film.studioId } },
        genres: { connect: film.genres?.connect },
      },
      include: {
        genres: true,
        studio: true,
      },
    });
    ctx.response.status = 201;
    ctx.response.body = createdFilm;
  },

  async update(ctx: Context) {
    const body = await ctx.request.body();
    const film: Film = body.value;
    const updatedFilm = await prisma.film.update({
      where: { id: Number(ctx.params.id) },
      data: {
        title: film.title,
        synopsis: film.synopsis,
        duration: film.duration,
        release: film.release,
        studio: { connect: { id: film.studioId } },
        genres: { connect: film.genres?.connect },
      },
      include: {
        genres: true,
        studio: true,
      },
    });
    ctx.response.body = updatedFilm;
  },

  async delete(ctx: Context) {
    const deletedFilm = await prisma.film.delete({
      where: { id: Number(ctx.params.id) },
    });
    ctx.response.body = deletedFilm;
  },
};

const router = new Router();
router.get('/films', filmController.index).get('/films/:id', filmController.show).post('/films', filmController.create).put('/films/:id', filmController.update).delete('/films/:id', filmController.delete);

export default router;
