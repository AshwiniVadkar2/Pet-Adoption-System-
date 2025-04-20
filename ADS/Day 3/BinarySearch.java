public class BinarySearch {	
    public static void main(String[] a) {
        int arr[] = {0, 1, 2, 3, 4, 5, 6};
        int x = 4; 
        int ans = binarySearch(arr, x);

        if (ans == -1)
            System.out.println("Element doesn't exist");
        else
            System.out.println("Element " + x + " found at index: " + ans);
    }

    public static int binarySearch(int[] arr, int x) {
        int l = 0, r = arr.length - 1;

        while (l <= r) {
            int mid = l + (r - l) / 2;

            if (arr[mid] == x)
                return mid;
            else if (arr[mid] < x)
                l = mid + 1;
            else
                r = mid - 1;
        }

        return -1;
    }
}
