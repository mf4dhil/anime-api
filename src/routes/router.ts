import { Router } from 'https://deno.land/x/oak@v12.1.0/mod.ts';

const route = new Router();
route.get('/', (ctx) => {
  ctx.response.body = {"msg": "hello world"}
});

export default route
