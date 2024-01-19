<script setup lang="ts">
const { name } = useName()
</script>
<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink external to="/serializable">Serializable</NuxtLink> | Name: {{ name || '<empty>' }} |
      <button @click="name = ''">Reset name</button>
    </header>
    <NuxtPage />
  </div>
</template>