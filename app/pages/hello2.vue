<template>
  <main>
    <h1>Hello2 (Docs Example)</h1>
    <pre>{{ data }}</pre>
  </main>
</template>

<script setup lang="ts">
// const { data } = await useFetch('/api/hello', { key: 'hello2-app-pages' })
const { data } = await useFetch('/.netlify/functions/hello_get22', { key: 'hello2-app-pages' })
</script>


