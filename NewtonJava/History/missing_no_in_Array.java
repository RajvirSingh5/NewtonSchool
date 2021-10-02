/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

*/



class Solution {
    public int missingNumber(int[] nums) {
        int i= 0;
        Arrays.sort(nums);
        for(i=0; i<nums.length; i++) {
            if(i!=nums[i]){
               break; 
            }
               
        }
        return i;
        
    }
     
}