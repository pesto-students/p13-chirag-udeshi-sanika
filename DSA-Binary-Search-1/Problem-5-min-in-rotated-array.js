/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length == 0) return nums;
  if (nums.length == 1) return nums[0];

  if(nums[0] < nums[nums.length -1])
    return nums[0]; // array is not rotated
  let start = 0,
    end = nums.length - 1;


  return binarySearch(start, end, nums);
};

const binarySearch = (start, end, nums) => {
  if (start < 0 || end > nums.length - 1 || start > end) return -1; 

  
  let mid = Math.floor((start + end) / 2);

  if(mid > start && nums[mid] < nums[mid-1])
    return nums[mid]; // found exact element

    if( mid < end && nums[mid] > nums[mid+1])
        return nums[mid+1]; // found element just before the target element

  if (
    mid > start &&
    nums[mid] > nums[mid - 1] &&
    mid < end &&
    nums[mid] < nums[mid + 1]
  ) {
    //a normal number with correct previous and next element, so we need to decide whether to move left or right based on the first element of array
    if(nums[mid] > nums[0]){
        //move right
        return binarySearch(mid+1, end, nums);
    }
    //move left
    return binarySearch(start, mid-1, nums);
}

};

console.log(findMin([2,1]));
