import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'
class ApplicationController extends KoaRouter {
	constructor (...args: any) {
		super(...args)
		// this.use(this.authorize)
	}

	async authorize (ctx: Koa.Context, next: Koa.Next) {
		await next()
	}
}
module.exports = ApplicationController