import { Router } from 'https://deno.land/x/oak@v12.1.0/mod.ts';
import { fresponse, prisma } from '../response.ts';

const route = new Router();

// add router
route
  .get('/film', (ctx) => {
    
    ctx.response.body = {'msg': 'get all film'}
  })
  .get('/film/:id', (ctx) => {
    ctx.response.body = {'msg': 'get film by id'}
  })
  .get('/film/', (ctx) => {
    ctx.response.body = {'msg': 'get film by id'}
  })
  .post('/film', (ctx) => {
    ctx.response.body = {'msg': 'create film'}
  })
  .patch('/film/:id', (ctx) => {
    ctx.response.body = {'msg': 'update film'}
  })
  .delete('/film/:id', (ctx) => {
    ctx.response.body = {'msg': 'delete film'}
  })