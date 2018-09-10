import * as Koa from 'koa';
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa2 Typescirpt!'
});

export default app;