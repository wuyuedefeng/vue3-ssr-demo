import * as Koa from "koa";
const koa = new Koa();

async function startApp() {
  koa.use(require("./middlewares/responseTime"));
  koa.use(require("./middlewares/logger"));
  koa.use(require("./middlewares/cookie"));
  koa.use(require("./middlewares/koa-cors"));
  await require("./middlewares/useRouter")(koa);

  const PORT = 3333;
  koa.listen(PORT, () => {
    console.log(`server is listening in http://localhost:${PORT}`);
  });
}

startApp();
