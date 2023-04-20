import { Router } from 'https://deno.land/x/oak@v12.1.0/mod.ts';
import { fresponse, prisma } from '../response.ts';

const route = new Router();

// add router
route
  .get('/film/all', async (ctx) => {
    try {
      const response = await prisma.film.findMany({
        include: {
          genres: true,
          studio: true
        }
      });
      fresponse(200, response, "Get all data film", ctx.response)
    } catch (error) {
      fresponse(500, null, error.message, ctx.response)
    }
  })
  .get('/film', async (ctx) => {
    const page = ctx.request.url.searchParams.get("page");
    const pageSize = Number(ctx.request.url.searchParams.get("pageSize")|| "12");

    // Menghitung ofsett untuk query
    const ofsett = page ? (Number(page)- 1) * pageSize : 0;

    // query data dengan limit dan ofset
    try {
      const films = await prisma.film.findMany({
        take: pageSize,
        skip: ofsett,
        include: {
          genres: true,
          studio: true,
        }
      });

      // Hitung jumlah halaman
      const totalCount = await prisma.film.count();
      const totalPages = Math.ceil(totalCount / pageSize)

      // buat metadata untuk response

      const metadata = {
        current: page || "1",
        prev: Number(page) > 1 ? String(Number(page) - 1) : undefined,
        next: Number(page) < totalPages ? String(Number(page) + 1) : undefined,
      };

      // Kirim response dengan metadata
      fresponse(200, films, "Success", ctx.response, metadata)

    } catch (error) {
      fresponse(500, null, error.message, ctx.response)
    }

  })
  .get('/film/:id', (ctx) => {
    ctx.response.body = {'msg': 'get film by id'}
  })
  .get('/film/', (ctx) => {
    ctx.response.body = {'msg': 'get film by id'}
  })
  .post('/film', async ({request, response}) => {
    try {
      const body = request.body({type: 'json'});
      const result = await body.value
      const { title, img, duration, tipe, synopsis, studioId, genre } = result;
      console.log(genre)

      // Buat data anime baru
      const film = await prisma.film.create({
        data: {
          title,
          img,
          duration,
          tipe,
          synopsis,
          studio: { connect: { id: studioId } },
          genres: { connect: genre.map((genreId: number) => ({ id: genreId })) },
        },
      });
  
      // Kirim response
      fresponse(201, film, "Anime created successfully", response);
    } catch (error) {
      fresponse(500, null, error.message, response);
    }
  })
  .patch('/film/:id', (ctx) => {
    ctx.response.body = {'msg': 'update film'}
  })
  .delete('/film/:id', (ctx) => {
    ctx.response.body = {'msg': 'delete film'}
  })

export default route