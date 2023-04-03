import { Router } from 'https://deno.land/x/oak@v12.1.0/mod.ts';
import { fresponse, prisma } from "../response.ts";

const route = new Router();

// add router
route
  .get('/genre', async (ctx) => {
    // controller get all
    try {
      const genre = await prisma.genre.findMany()
      fresponse(200, genre, "Get All data Genre", ctx.response)
    } catch (error) {
      fresponse(500, '', error.message, ctx.response)
    }
  })
  .get('/genre/:id', async (ctx) => {
    // controller get by id
    try {
      const id: string = ctx.params.id; 
      const data = await prisma.genre.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(!data) return fresponse(404, '', "Not Found", ctx.response)
      fresponse(200, data, "Get genre By Id", ctx.response)
    } catch (error) {
      fresponse(500, '', error.message, ctx.response)
    }
  })
  .post('/genre', async (ctx) => {
    // controller create
    try {
      const body = ctx.request.body({type: 'json'});
      const formData = await body.value
      const result = formData.name
      if (!result) return fresponse(400, '', "Please Input name", ctx.response)
      const dGenre = await prisma.genre.create({
        data: {
          name: result
        }
      })
      fresponse(201, dGenre, "Created Genre Successfully!", ctx.response)
    } catch (error) {
      fresponse(500, '', error.message, ctx.response)
    }
  })
  .patch('/genre/:id', async (ctx) => {
    // controller update
    const id: string = ctx.params.id
    try {
      const fData = await prisma.genre.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(!fData) return fresponse(404, '', "Genre Not Found", ctx.response)
      const body = ctx.request.body({type: 'json'})
      const fBody = await body.value
      const data = await prisma.genre.update({
        where: {
          id: Number(id)
        },
        data: {
          name: fBody.name
        }
      });
      fresponse(200, data, "Updated Genre Successfully!", ctx.response)
    } catch (error) {
      fresponse(500, '', error.message, ctx.response)
    }
  })
  .delete('/genre/:id', async (ctx) => {
    try {
      const id: string = ctx.params.id
      await prisma.genre.delete({
        where: {
          id: Number(id)
        }
      })
      fresponse(200, 'deleted', "Genre Deleted Successfully!", ctx.response)
    } catch (error) {
      fresponse(500, '', error.message, ctx.response)
    }
  });

export default route
