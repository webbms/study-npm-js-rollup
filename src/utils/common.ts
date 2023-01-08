// 数组去重
const unique = (arry: number[]): number[] => {
  return Array.from(new Set(arry))
}
// 数组冒泡排序
const sortArray = (nums: number[]): number[] => {
  let sorted = true
  for (let i = nums.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j]
        // eslint-disable-next-line no-param-reassign
        nums[j] = nums[j + 1]
        // eslint-disable-next-line no-param-reassign
        nums[j + 1] = temp
        sorted = false
      }
    }
    if (sorted) {
      break
    }
  }
  return nums
}

export { unique, sortArray }
