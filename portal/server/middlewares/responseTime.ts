import * as Koa from 'koa'
async function responseTime(ctx: Koa.Context, next: Koa.Next) {
	let start = Date.now();
	await next()
	let ms = Date.now() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
}

module.exports = responseTime