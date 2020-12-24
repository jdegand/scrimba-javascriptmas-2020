function arrayMaximalAdjacentDifference(arr) {
    let initial = Math.abs(arr[0]-arr[1]);

   for(let i = 1; i < arr.length - 1; i++){
   const difference = Math.abs(arr[i] - arr[i+1])

   if(initial < difference){
   	initial = difference;
   }
  }

    console.log(initial)
}

arrayMaximalAdjacentDifference([2, 4, 1, 0])
arrayMaximalAdjacentDifference([2, 9, 1, 0])
