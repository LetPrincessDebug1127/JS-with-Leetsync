from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # Pointer for the next position of non-val element
        k = 0  
        
        # Iterate through the list
        for i in range(len(nums)):
            if nums[i] != val:
                # Place the non-val element at the index k
                nums[k] = nums[i]
                k += 1
        
        return k
