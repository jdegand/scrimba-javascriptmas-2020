function insertDashes(str){
let [first, second] = str.split(' ')
let f = first.split('').join('-')
let s = second.split('').join('-');
console.log(f.concat(' ').concat(s))
}

insertDashes('aba caba')
