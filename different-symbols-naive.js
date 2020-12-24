function differentSymbolsNaive(str) {
   let arr = str.split('');
   let set = new Set(arr)
   console.log(set.size)
}

differentSymbolsNaive('cabca')
