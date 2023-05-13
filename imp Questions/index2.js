//Trapping Rain Water
//   Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section)
// is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let left = 0;
let right = height.length - 1;
let left_max = 0;
let rigth_max = 0;
let water = 0;
while (left < right) {
  if (height[left] < height[right]) {
    if (height[left] >= left_max) {
      left_max = height[left];
    } else {
      water += left_max - height[left];
    }
    left++;
  } else {
    if (height[right] >= rigth_max) {
      rigth_max = height[right];
    } else {
      water += rigth_max - height[right];
    }
    right--;
  }
}
console.log(water);
