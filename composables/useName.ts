export const useName = () => {
  const name = useState('name', () => '')
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

