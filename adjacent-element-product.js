function adjacentElementsProduct(arr){

  let result = [];

  for(let i = 0; i <= arr.length; i++){
  	if(arr[i+1] !== undefined){
		let answer = arr[i] * arr[i+1]

		result.push(answer)
    }
}
	console.log(Math.max(...result))
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3])
