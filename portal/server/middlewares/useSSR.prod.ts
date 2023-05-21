import * as Koa from "koa";
const fs = require('fs')
const path = require('path')
const koaStatic = require('koa-static')

const projectPath = path.resolve(__dirname, '../../');
module.exports = async function useSsr(app: Koa) {
	app.use(koaStatic(path.resolve(projectPath, 'dist/client/client'), {
		maxAge: 1000 * 60 * 60 * 24 * 7,
		gzip: true
	}))
	const { render } = await import(path.resolve(projectPath, 'dist/client/server/entry-server.mjs'))
	const manifest = require(path.resolve(projectPath, 'dist/client/client/ssr-manifest.json'))
	const indexTemplate = fs.readFileSync(path.resolve(projectPath, 'dist/client/client/index.html'), 'utf-8')

	app.use(async (ctx: Koa.Context, next: Koa.Next) => {
		await next()
		if (ctx.body) return;
		const {renderedHtml, preloadLinks, ssrState} = await render(ctx, manifest)
		const html = indexTemplate.replace('<!--ssr-outlet-->', renderedHtml)
			.replace('<!--ssr-preload-links-->', preloadLinks + `<script>window.__SSR_STATE__ = ${ssrState};</script>`)
		ctx.type = 'text/html'
		ctx.body = html
	})
}