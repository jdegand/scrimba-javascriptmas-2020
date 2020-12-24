function countVowelConsonant(str){

let regex = /[aeiou]/gi;
let stringLength = str.length;
let vowels = [...str].filter(x => x.match(regex)).length;
let consonants = stringLength - vowels;
console.log((consonants * 2) + vowels)

}

countVowelConsonant('abcde')
