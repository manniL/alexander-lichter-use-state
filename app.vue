<script setup lang="ts">
const { name } = useName()
</script>
<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink external to="/serializable">Serializable</NuxtLink> | Name: {{ name || '<empty>' }}
    </header>
    <NuxtPage/>
  </div>
</template>