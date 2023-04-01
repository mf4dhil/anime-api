import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

import route from './src/routes/router.ts';
const app = new Application();

const { PORT } = config();

app.use(route.routes());
app.use(route.allowedMethods())

console.log(`Server Running att http://127.0.0.1:${PORT}`)

await app.listen({ port: parseInt(PORT) });
