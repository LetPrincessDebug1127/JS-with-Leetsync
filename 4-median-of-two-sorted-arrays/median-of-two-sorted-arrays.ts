function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1); // Ensure nums1 is the smaller array
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0, right = m;

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = Math.floor((m + n + 1) / 2) - partition1;

        const maxLeft1 = partition1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Number.POSITIVE_INFINITY : nums1[partition1];
        
        const maxLeft2 = partition2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Number.POSITIVE_INFINITY : nums2[partition2];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }
    throw new Error("Input arrays are not sorted");
}