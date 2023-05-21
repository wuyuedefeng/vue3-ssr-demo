import { createApp } from './main'
import './assets/main.css'

const { app, router, pinia } = createApp()

router.isReady().then(() => {
	app.mount('#app', true)
})

// 初始化 pinia state
// ts注意：__SSR_STATE__需要在 src/types/shims-global.d.ts中定义
if ((window as any).__SSR_STATE__) {
	const ssrState = Object.assign({
		piniaState: null
	}, (window as any).__SSR_STATE__)
	// 初始化pinia
	if (ssrState.piniaState) {
		console.log('init ssr pinia state', ssrState.piniaState)
		pinia.state.value = ssrState.piniaState
	}
}