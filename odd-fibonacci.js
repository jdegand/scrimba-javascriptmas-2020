function oddFibonacci(num) {
  let result = 0;
  let first = 1;
  let second = 0;
  let combined = 0;

 	while (first <= num){
  	if(first % 2 !== 0) {
  		result += first;
  	}
  	combined = first + second;
    first = second;
    second = combined;
  }
  console.log(result)
}

oddFibonacci('1000')
