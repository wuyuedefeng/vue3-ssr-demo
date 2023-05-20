import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'

const koa = new Koa()
const router = new KoaRouter()

router.get('/', async (ctx) => {
    ctx.body = 'hello world'
})

koa.use(router.routes())

const PORT = 3333
koa.listen(PORT, () => {
    console.log(`server is listening in http://localhost:${PORT}`)
})
