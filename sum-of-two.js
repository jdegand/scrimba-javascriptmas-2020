function sumOfTwo(nums1, nums2, value) {
let combined = nums1.concat(nums2);

			for(let x in combined){
        for(let y in combined){
        	// see if array[x] + array[y] === sum
          	if (combined[x] + combined[y] === value){
            	return true
            }
        }

      }
      return false
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42))
