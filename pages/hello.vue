<template>
  <main>
    <h1>Hello page (SSR)</h1>
    <p v-if="error">Error: {{ error }}</p>
    <p v-else-if="pending">Loading...</p>
    <p v-else>{{ message }}</p>
  </main>
</template>

<script setup lang="ts">
import { useFetch } from '#app'
import { computed } from 'vue'

type HelloResponse = { message: string }

const { data, pending, error } = await useFetch<HelloResponse>('/api/hello', {
  server: true,
  key: 'hello-api'
})

const message = computed(() => data.value?.message ?? '')
</script>


