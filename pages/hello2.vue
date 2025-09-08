<template>
  <main>
    <h1>Hello2 (Docs Example)</h1>
    <p v-if="error">Error: {{ error }}</p>
    <p v-else-if="pending">Loading...</p>
    <pre v-else>{{ json }}</pre>
  </main>
  
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import { computed } from 'vue'

type ApiResponse = unknown

const { data, pending, error } = await useFetch<ApiResponse>('/api/hello', {
  key: 'hello2-example'
})

const json = computed(() => JSON.stringify(data.value, null, 2))
</script>


