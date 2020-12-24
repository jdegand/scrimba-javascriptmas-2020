function multiplesJump(arr){

let maxNumber = Math.max(...arr)

for(let i = 1; i < maxNumber + 1; i++){
	if(arr.every(x => x % i !== 0)){
  	console.log(i)
  }
}

}

multiplesJump([5, 3, 6, 7, 9])
