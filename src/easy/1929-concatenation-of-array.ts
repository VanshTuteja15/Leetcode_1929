/**
 * LeetCode 1929 - Concatenation of Array
 *
 * Difficulty: Easy
 */

function getConcatenation(nums: number[]): number[] {
  const ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }

  return ans;
}