function extractEachKth(nums, index) {

   let result = nums.filter(x => x % index !== 0)

   console.log(result)
}

extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
