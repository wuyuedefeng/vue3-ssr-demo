<script lang='tsx' setup>
// https://segmentfault.com/a/1190000042307021
import AsyncSSR from './AsyncSSR.vue'
</script>

<template>
  <Suspense>
    <AsyncSSR/>
  </Suspense>
</template>
