import * as Koa from 'koa'
// https://github.com/snake2-npms/snake2/blob/master/template/app/middlewares/1.cookie.js
module.exports = async (ctx: Koa.Context, next: Koa.Next) => {
	// const token = ctx.cookies.get('authorization')
	await next()
}