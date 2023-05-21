<script lang='tsx'>
// https://segmentfault.com/a/1190000042307021
import { defineComponent, reactive, toRefs } from 'vue'
import * as ssr from '@/utils/ssr'

export default defineComponent({
  // 使用async setup 外部需要使用Suspense包裹
  async setup (props, ctx) {
    let ssrContext = ssr.getSSRContext()
    // client: null, server: {ssrPath, ssrData}
    console.log('ssrContext', ssrContext)

    // run in: ssr & client
    let val = await new Promise(resolve => {
      setTimeout(() => resolve(1), 3000)
    })

    const state = reactive({
      val
    })
    return { ...toRefs(state) }
  },
})
</script>

<template>
  <div class="async-ssr">
    <h1>This is an async SSR page</h1>
    <div>async val: {{ val }}</div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .async-ssr {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
