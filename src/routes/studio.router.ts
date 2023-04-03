import { Router } from 'https://deno.land/x/oak@v12.1.0/mod.ts';
import { fresponse, prisma } from "../response.ts";

const route = new Router();

// add router
route
  .get('/studio', async (ctx) => {
    try {
      const data = await prisma.studio.findMany()
      fresponse(200, data, "Get all studio", ctx.response)
    } catch (error) {
      fresponse(500, null, `eror server: ${error.message}`, ctx.response)
    }
  })
  .get('/studio/:id', async (ctx) => {
    const id: string = ctx.params.id
    try {
      const data = await prisma.studio.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(!data) return fresponse(404, null, "Data Not Found", ctx.response)
      fresponse(200, data, "get data by id", ctx.response)
    } catch (error) {
      fresponse(500, null, `eror server: ${error.message}`, ctx.response)
    }
  })
  .post('/studio', async (ctx) => {
    const body = ctx.request.body({type: 'json'})
    const valbody = await body.value
    const name = valbody.name
    if(!name) return fresponse(500, name, "name cannot be empty", ctx.response)
    try {
      const response = await prisma.studio.create({
        data: {
          name
        }
      })
      fresponse(201, response, "Studio Created Successfully", ctx.response)
    } catch (error) {
      fresponse(500, null, `Error server: ${error.message}`, ctx.response)
    }
  })
  .patch('/studio/:id', async (ctx) => {
    const id: string = ctx.params.id
    const data = await prisma.studio.findUnique({
      where: {
        id: Number(id)
      }
    })
    if(!data) return fresponse(404, null, "Data Not Found", ctx.response)
    try {
      const body = ctx.request.body({type: 'json'})
      const valbody = await body.value
      const name = valbody.name
      if(!name) return fresponse(500, name, "name cannot be empty", ctx.response)
      const response = await prisma.studio.update({
        where: {
          id: Number(data.id)
        },
        data: {
          name: name
        }
      })
      fresponse(200, response, "Updated Successfully", ctx.response)
    } catch (error) {
      fresponse(500, null, `Server Eror: ${error.message}`, ctx.response)
    }
  })
  .delete('/studio/:id', async (ctx) => {
    const id: string = ctx.params.id
    const data = await prisma.studio.findUnique({
      where: {
        id: Number(id)
      }
    })
    if(!data) return fresponse(404, null, "Data Not Found", ctx.response)
    try {
      await prisma.studio.delete({
        where: {
          id: Number(data.id)
        }
      })
      fresponse(200, 'deleted', "Data Deleted Successfully", ctx.response)
    } catch (error) {
      fresponse(500, 'deleted', `Error server: ${error.message}`, ctx.response)
    }
  });

export default route