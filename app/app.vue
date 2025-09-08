<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

if (route.path === '/') {
  await navigateTo('/hello', { replace: true, redirectCode: 302 })
}
</script>
