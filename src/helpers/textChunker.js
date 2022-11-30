export const textChunker = (text, numberOfCharacters) => {
  return `${text.slice(0, numberOfCharacters)}...`
}
