import java.util.ArrayList;
import java.util.List;

class SubArray {
    public static void main(String args[]) {
        int[][] testCases = {
            {1, 3, -7, 3, 2, 3, 1, -3, -2, -2},
            {1, 2, -3, 4, 5, 6},
            {1, 2, -2, 3, 4, 5, 6}
        };

        for (int[] nums : testCases) {
            System.out.println("Sub-arrays with 0 sum:");
            findZeroSumSubarrays(nums);
            System.out.println();
        }
    }

    public static void findZeroSumSubarrays(int[] arr) {
        for (int start = 0; start < arr.length; start++) {
            int sum = 0;
            for (int end = start; end < arr.length; end++) {
                sum += arr[end];
                if (sum == 0) {
                    printSubArray(arr, start, end);
                }
            }
        }
    }

    public static void printSubArray(int[] arr, int start, int end) {
        System.out.print("[");
        for (int i = start; i <= end; i++) {
            System.out.print(arr[i]);
            if (i < end) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
}
