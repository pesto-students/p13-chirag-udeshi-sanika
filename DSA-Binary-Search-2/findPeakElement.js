/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length == 1)
        return 0;

    return findPeakHelper(nums, 0, nums.length - 1)
};

const findPeakHelper = (nums, start, end) => {

    if (start > end)
        return

    let mid = Math.floor((start + end) / 2);
    let prevElement = mid - 1 >= 0 ? nums[mid - 1] : Number.NEGATIVE_INFINITY;
    let nextElement = mid + 1 <= nums.length - 1 ? nums[mid + 1] : Number.NEGATIVE_INFINITY;

    if (nums[mid] > prevElement && nums[mid] > nextElement)
        return mid;

    if (nums[mid] < nextElement) //go right
        return findPeakHelper(nums, mid + 1, end);

    //else go left
    return findPeakHelper(nums, start, mid - 1);



}