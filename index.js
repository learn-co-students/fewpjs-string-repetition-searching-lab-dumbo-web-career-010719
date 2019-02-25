// Code your solution here
const heyJude = () => {
    const str ="Na na na na na na na, na na na na, hey Jude."
    return str.repeat(16);
}

const prohibitedLanguage = (str) => {
    let myRegExp= /candycorn|brusselssprouts/
   return str.search(myRegExp)
}
