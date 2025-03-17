class Maximum {
    public static void main(String args[]) {
        int nums[] = { 2, 3, 5, 7, -7, 5, 8, -5 };
        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > max1) {
                max2 = max1;
                max1 = nums[i];
            } else if (nums[i] > max2 && nums[i] < max1) {
                max2 = nums[i];
            }
        }
        
        int maxProduct = max1 * max2;
        System.out.println("Pair is (" + max2 + ", " + max1 + "), Maximum Product: " + maxProduct);
    }
}

