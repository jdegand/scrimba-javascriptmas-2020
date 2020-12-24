function arrayPreviousLess(nums) {
  let result = [];

  for(let i = nums.length -1; i >= 0; i--) {
  	for(let j = i; j >= 0; j--) {
    	if(nums[i] > nums[j]) {
      	result.unshift(nums[j]);
        break;
    	} else if (j === 0) {
      	result.unshift(-1);
      }
    }
 }
 console.log(result)
}

arrayPreviousLess([3, 5, 2, 4, 5])
