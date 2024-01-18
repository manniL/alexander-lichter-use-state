<script setup lang="ts">
const route = useRoute()
const { name, setName } = useName()
setName(route.params.name as string)
</script>

<template>
  <div>
    Name: {{ name }}
  </div>
</template>