import { useSSRContext } from 'vue'

export const isSSR = () => import.meta.env.SSR
export const getSSRContext = function () {
	let ssrContext = null
	// run in: only ssr
	if (isSSR()) {
		ssrContext = useSSRContext()
	}
	return ssrContext
}