<script setup lang="ts">
type Link = { name: string; link: string; }
// Generate on the server
// Transfer to the client
const list = useState<Link[]>('random-links', () => generateRandomLinks());

function generateRandomLinks() {
  const links: Link[] = [];

  for (let i = 0; i < 10; i++) {
    const link = generateRandomLink();
    links.push({
      name: "data" + i,
      link: link,
    });
  }
  return links;
}

function generateRandomLink() {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 10;
  let link = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    link += characters[randomIndex];
  }

  return `/name/${link}`;
}
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item.name">
      <NuxtLink :to="item.link">{{ item.link }}</NuxtLink>
    </li>
  </ul>
</template>