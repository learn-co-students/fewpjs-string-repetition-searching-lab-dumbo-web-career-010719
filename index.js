// Code your solution here
function heyJude(){
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16)
}

let prohibitedLanguage = (string) => {
  let bannedWords = /candycorn|brusselssprouts/
  return string.search(bannedWords)
}
