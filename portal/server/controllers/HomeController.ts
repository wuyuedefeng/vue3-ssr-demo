import * as Koa from 'koa'
const ApplicationController = require('./ApplicationController')
class HomeController extends ApplicationController {
	constructor () {
		super({prefix: '/'})

		this.get('/', async (ctx: Koa.Context) => {
			ctx.body = "hello world"
		})

		this.get('asyncSSR', async (ctx: Koa.Context) => {
			ctx.ssrData = 'hello world from ssrData'
		})
	}
}
module.exports = HomeController