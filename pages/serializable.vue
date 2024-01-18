<script setup lang="ts">
const state = useState(() => new class {
  name = "John Doe";
  age = 42;
})
</script>

<template>
  <div>
    {{ state }}
  </div>
</template>