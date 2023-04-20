import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

import route from './src/routes/router.ts';
import genreRouter from './src/routes/genre.router.ts'
import studioRouter from './src/routes/studio.router.ts'
import filmRouter from "./src/routes/film.router.ts"

const app = new Application();

const { PORT } = config();

app.use(route.routes());
app.use(route.allowedMethods())
app.use(genreRouter.routes())
app.use(genreRouter.allowedMethods())
app.use(studioRouter.routes())
app.use(studioRouter.allowedMethods())
app.use(filmRouter.routes())
app.use(filmRouter.allowedMethods())

console.log(`Server Running att http://127.0.0.1:${PORT}`)

await app.listen({ port: parseInt(PORT) });
