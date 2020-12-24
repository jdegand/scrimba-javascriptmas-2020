function chunkyMonkey(array, size){
	let result = [];

  for(let i = 0; i < array.length; i+=size){
  	let chunk = array.slice(i, i+size);
    result.push(chunk)
  }
	console.log(result)
}

chunkyMonkey(["a", "b", "c", "d"], 2)
