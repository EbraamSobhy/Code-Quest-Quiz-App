// app/data/ProblemBank.js
const ProblemBank = [
  {
    id: 1,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your code here
}`,
      python: `def twoSum(nums, target):
    # Write your code here
    pass`,
    },
    solution: {
      javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}`,
      python: `def twoSum(nums, target):
    lookup = {}
    for i, num in enumerate(nums):
        if target - num in lookup:
            return [lookup[target - num], i]
        lookup[num] = i`,
    },
  },
  {
    id: 2,
    title: "Reverse String",
    description: "Write a function that reverses a string.",
    examples: [
      { input: '"hello"', output: '"olleh"' },
      { input: '"world"', output: '"dlrow"' },
    ],
    constraints: [
      "1 <= s.length <= 10^5",
      "s consists of printable ASCII characters.",
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your code here
}`,
      python: `def reverseString(s):
    # Write your code here
    pass`,
    },
    solution: {
      javascript: `function reverseString(s) {
  return s.split("").reverse().join("");
}`,
      python: `def reverseString(s):
    return s[::-1]`,
    },
  },
];

export default ProblemBank;
