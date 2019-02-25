// Code your solution here

let heyJude = function(verse){
    return verse.repeat(16)
  }

let prohibitedLanguage = function(verse){
    let expressions = /candycorn|brusselssprouts/
    return verse.search(expressions)
}