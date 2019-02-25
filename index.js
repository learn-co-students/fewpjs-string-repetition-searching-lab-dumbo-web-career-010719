function heyJude(){
  return "Na" + " na".repeat(6) + "," + " na".repeat(4) + ", hey Jude."
}

function prohibitedLanguage(username){
  const prohibitedWords = /candycorn|brusselssprouts/
  return username.search(prohibitedWords)

}
