export default defineNuxtPlugin(() => {
  const { name } = useName()
  console.log('hi from plugin, name is:    ', name.value || '<empty>')
})