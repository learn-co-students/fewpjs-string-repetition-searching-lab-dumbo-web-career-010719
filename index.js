// Code your solution here
const heyJude = () => {
  let str = 'Na na na na na na na, na na na na, hey Jude.'
  return str.repeat(16)
}

const prohibitedLanguage = (name) => {
  let banned = /candycorn|brusselssprouts/
  return name.search(banned)
}
