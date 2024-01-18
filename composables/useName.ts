const name = ref('')

export const useName = () => {
  const setName = (newName: string) => {
    console.log('setName', newName, name.value || 'None!')
    if (!name.value) {
      name.value = newName
    }
  }
  return {
    name,
    setName
  }
}